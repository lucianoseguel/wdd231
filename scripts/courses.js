const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]




// Function for rendering in screen
function showcourses(courseArray) {
    const course_list_container = document.getElementById('course-list');
    course_list_container.innerHTML = ''; // set clear 


    courseArray.forEach(course => {

        const course_container = document.createElement('div');
        course_container.className = 'course-item';

        if (course.completed == true) {

            course_container.innerHTML = `
                   <button class="course-button"> ✅ ${course.subject}  ${course.number}  </button>
                `;

        } else {

            course_container.innerHTML = `
                   <button class="course-button"> 🏗️ ${course.subject}  ${course.number}  </button>
                `;
        }

        course_list_container.appendChild(course_container);

    });








}

// Filter function
function filterCourses(filter) {
    let filtered;

    if (filter == 'all') {
        filtered = courses


        const totalCredits = filtered
            .filter(course => course.completed == true)
            .reduce((accomulate, course) => accomulate + course.credits, 0)


        const credit_container = document.getElementById('credit_container')
        credit_container.innerHTML = `<p>Total Credits: ${totalCredits}</p>`


    } else if (filter == 'CSE') {
        filtered = courses.filter(course => course.subject == 'CSE')


        const totalCredits = filtered
            .filter(course => course.completed == true)
            .reduce((accomulate, course) => accomulate + course.credits, 0);


        const credit_container = document.getElementById('credit_container')
        credit_container.innerHTML = `<p>Total Credits: ${totalCredits}</p>`
    } else if (filter == 'WDD') {
        filtered = courses.filter(course => course.subject == 'WDD')


        const totalCredits = filtered
            .filter(course => course.completed == true)
            .reduce((accomulate, course) => accomulate + course.credits, 0);


        const credit_container = document.getElementById('credit_container')
        credit_container.innerHTML = `<p>Total Credits: ${totalCredits} </p>`
    }

    //Returning courses
    showcourses(filtered);


}


// set starting loading page
filterCourses('all');


// Last modified function

let lastmod = document.getElementById('lastModified')

lastmod.textContent =  `Last Modified: ${document.lastModified}`
