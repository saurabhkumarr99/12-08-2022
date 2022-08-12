var student_list = new Array();

function add_student() {

    let obj = {

        sname: document.getElementById('sname').value,
        fname: document.getElementById('fname').value,
        mname: document.getElementById('mname').value,
        gender: document.getElementById('gender').value,
        dob: document.getElementById('date').value,

    };
    student_list.push(obj);

    alert(JSON.stringify(student_list));

    document.getElementById('StudentList').innerHTML = "";
    let StudentList = document.getElementById('StudentList');
    student_list.forEach(function (element, index) {

        let sname = document.createElement('text');
        sname.textContent = element.sname;
        sname.style.color = "blue";
        let li = document.createElement('li');
        li.appendChild(sname);

        let fname = document.createElement('text');
        fname.textContent = element.fname;
        fname.style.color = "blue";
        li.appendChild(fname);

        let mname = document.createElement('text');
        mname.textContent = element.mname;
        mname.style.color = "blue";
        li.appendChild(mname);

        let gender = document.createElement('text');
        gender.textContent = element.gender;
        gender.style.color = "blue";
        li.appendChild(gender);
        
        let dob = document.createElement('text');
        dob.textContent = element.dob;
        dob.style.color = "blue";
        li.appendChild(dob);

        StudentList.appendChild(li);
    });


}

