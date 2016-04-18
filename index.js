var pg = require('pg');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var express = require('express');
var app = express();
var dbName = 'adminstatedb';
var conStringDb = "postgres://postgres:welcometohell49@localhost/" + dbName;

var queryError = function(err, query, res, responseHandler, result) {
    if(err) {
        console.error('db query error: ' + query + ', ' + err);
        responseHandler(res, result); // result typically [] or {}
        return true;
    } else return false;
};


var connectionError = function(err, res, responseHandler, result) {
    if(err) {
        console.error('error w/ db connection pool', err);
        responseHandler(res, result); // result typically [] or {}
        return true;
    } else return false;
};

app.returnRowResult = function(res, result) {
    if (result && result.rows) {
        res.status(200).json(result.rows[0]);        
    } else  {
        res.status(404).send();  
    }
};

app.returnCollectionResult = function(res, result) {
    if (result && result.rows) {
        //logRequest(JSON.stringify(result.rows));
        res.status(200).json(result.rows);        
    } else  {
        res.status(404).send(); 
    }
};
  

app.get('/courses', function(req, res) {
    get_courses(res, app.returnCollectionResult);
});

app.post('/courses', jsonParser, function(req, res) {
    //console.log(req);
    var new_course = req.body; // POST body is json text
    create_course(new_course, res, app.returnRowResult);
});

app.delete('/courses/:id', function(req, res) {
    var course_id = req.params.id;
    delete_course(course_id, res, app.returnRowResult);
});

app.put('/courses', function(req, res) {
    var course = req.body;
    update_course(course, res, app.returnRowResult);
});

var create_course = function(course, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        //console.log(JSON.stringify(course));
        client.query("INSERT INTO courses (id,title) VALUES ($1, $2) RETURNING id", 
            [course.id, course.title], function(err, result) {
            done();
            if (queryError(err, 'create course', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var get_courses = function(res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("SELECT * FROM courses", function(err, result) {
            done();
            if (queryError(err, 'get course', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var update_course = function(course, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("UPDATE courses SET id = $1, title = $2 WHERE title = $2;",
            [course.id, course.title], function(err, result) {
            done();
            if (queryError(err, 'update course', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var delete_course = function(course_id, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("DELETE FROM courses WHERE id = $1;", 
            [course_id], function(err, result) {
            done();
            if (queryError(err, 'delete course', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};




app.get('/students', function(req, res) {
    get_students(res, app.returnRowResult);
});

app.post('/students'), jsonParser, function(req,res){
    var new_student = req.body;
    create_student(new_student, res, app.returnRowResult);
}

app.delete('/students/:id'), jsonParser, function(req,res){
    var student_id = req.params.id;
    delete_student(student_id, res, app.returnRowResult);//server listeners
}







var create_student = function(student, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("INSERT INTO students (id,title) VALUES ($1, $2) RETURNING id", 
            [student.id, student.title], function(err, result) {
            done();
            if (queryError(err, 'create student', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var get_students = function(res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("SELECT * FROM students", function(err, result) {
            done();
            if (queryError(err, 'get student', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var update_student = function(student_id, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("UPDATE students WHERE id = $1;", 
            [student_id], function(err, result) {
            done();
            if (queryError(err, 'update student', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};

var delete_student = function(student_id, res, handleResult) {
    pg.connect(conStringDb, function(err, client, done) {
        if (connectionError(err,res, handleResult, {})) return;
        client.query("DELETE FROM students WHERE id = $1;", 
            [student_id], function(err, result) {
            done();
            if (queryError(err, 'delete student', res, handleResult, {})) return;
            handleResult(res, result);
        });
    });
};//database functions


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
