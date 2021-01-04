import React from "react";
import NavigationBar from "../components/navigation.jsx"
import "../styles/sassets/syllabus.scss";
import { Helmet } from 'react-helmet';
import { QuickLinkInternal } from "../components/quick-links.jsx";
import { Doughnut } from "react-chartjs-2";

class SyllabusPage extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                </Helmet>
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Syllabus
                    </h1>
                    <div className="syllabus-component">
                        {SyllabusSections()}
                        {SyllabusBody()}
                    </div>
                </div>
            </div>
        );
    }
}

/*
    Main rendered components here.
    Handles the actual logic of what should be displayed and how.
*/

function SyllabusSections() {
    let sections = [
        {
            icon: "trip_origin",
            label: "Overview",
            link: "#overview"
        },
        {
            icon: "group",
            label: "Sections",
            link: "#sections"
        },
        {
            icon: "school",
            label: "Staff",
            link: "#staff"
        },
        {
            icon: "leaderboard",
            label: "Grading",
            link: "#grading"
        },
        {
            icon: "laptop",
            label: "Technologies",
            link: "#course-tech"
        },
        {
            icon: "security",
            label: "Integrity",
            link: "#integrity"
        }
    ]

    let links = sections.map(section => QuickLinkInternal(section.icon, section.label, section.link))
    return (
        <div className="syllabus-nav">
            <div className="links">
                {links}
            </div>
        </div>
    )
}

function SyllabusBody() {
    return (
        <div className="syllabus-body">
            {CourseOverview()}
            {Sections()}
            {Staff()}
            {Grading()}
            {Technology()}
            {AcademicIntegrity()}
        </div>
    )
}

/*
    Individual Components of the Syllabus are located here.
    Edit these if you only want to change the content.
    All sections should subclass Syllabus Section and have a unique id.
*/

function CourseOverview() {
    return (
        <div id="overview" className="syllabus-topic">
            <h2>
                Overview
            </h2>
            <div className="syllabus-section" >
                <div className="header">
                    Welcome!
                </div>
                <div className="body">
                    In Fall 2020, CS10 is planning to try a new teaching plan to better support students and 
                    encourage participation during this unusual online offering of the course. Special thank 
                    you to John DeNero and the CS61A team for writing the original document which this was based on.
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Collaboration, Not Competition
                </div>
                <div className="body">
                    You are encouraged to form study groups and work together to understand course material, 
                    but (unless specified otherwise) all your graded work should be your own. Academic integrity 
                    and ethical conduct are of utmost importance in the College of Engineering and at UC Berkeley, 
                    especially with online offerings. We want to remind you that this course is graded on an 
                    absolute scale – that means that there will be no curve at the end of the course, so you don’t 
                    have to feel the pressure of having to cheat to get your A. You’re competing against an absolute 
                    scale, and you can all (in theory) receive A+ grades! (Though, we might need to make small bin 
                    adjustments if the GPA of the class is below the department suggested range, so we might adjust 
                    your score up, but it’ll never be adjusted down).
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Flexibility and Community
                    </div>
                    <div className="body">
                            Online classes taught during a time of wildfires, power outages, and a worldwide pandemic need to 
                            have policies that support students in different living situations, and in different time zones. 
                            They need to have a way that the students can get to know each other, learn from each other, and 
                            study with each other. They need to have a way the course staff can get to know their students, 
                            and (most importantly) check in with them to make sure their health and learning is going ok. The 
                            deadlines need to have flexibility in case a student or team needs some more time to finish a project 
                            or homework. We believe we have built all of that into our class this semester.
                        </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Synchronous and Asynchronous Learning
                    </div>
                    <div className="body">
                        Research (and anecdotal evidence) have shown that students who keep up with the material every week 
                        do better than students who fall behind, start projects late, and have to cram for each exam at the 
                        last minute. So, as much as you can, attend our face-to-face live session (Mon @ 10am PST … but Wed 
                        when Monday is a holiday) + a discussion (5 different times) synchronously. However, you will not be 
                        penalized for being in a time zone that makes that difficult, and you will find recordings of these 
                        sessions available. The only required synchronous element is a weekly 15m check-in with you and three 
                        other students with video on (with exceptions on a student-by-student basis), but will have many times 
                        throughout the day available for that.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sections() {
    return (
        <div id="sections" className="syllabus-topic">
            <h2>
                Sections
            </h2>
            <div className="syllabus-section" >
                <div className="header">
                    Course Elements
                </div>
                <div className="body">
                    We have a few different components to this course, all of which we have 
                    tried to optimize for online learning.
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lectures
                    </div> 
                    <div className="body">
                        Lecture content has been pre-recorded with high production value. 
                        There will be questions to answer via Gradescope after every lecture, 
                        for which you will earn credit. On Mondays at 10 AM, there will be a <strong>live </strong> 
                        weekly summary lecture--all content will be the same as in the recordings, 
                        but in less depth. You are required to watch the recording and encouraged (but not required) 
                        to attend the live sessions. If Monday is a holiday, the live session will be Wednesday. 
                        The live session wil also be recorded.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lab
                    </div> 
                    <div className="body">
                        Similar to discussion, we will have five labs scheduled through the day to be 
                        sensitive to differences in time zones. Lab attendance is encouraged and will 
                        be counted towards extra credit, but is not mandatory. Labs will be conducted 
                        through Discord. Checkoffs either happen in lab or via a Google Form submission. 
                        Note that you are graded on completion.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Discussion
                    </div> 
                    <div className="body">
                        Discussion content will be pre-recorded. However, we will also have five live discussion 
                        sections, scheduled throughout the day to be sensitive to differences in time zones. 
                        Discussion attendance is encouraged and will be counted towards extra credit, but is not 
                        mandatory. Live discussions will be held via Zoom.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Check-ins
                    </div> 
                    <div className="body">
                        Once a week, mandatory fifteen-minute synchronous group check-ins will be scheduled 
                        throughout the day to be sensitive to differences in time zones. Students will earn 
                        credit for attending.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Staff() {
    return (
        <div id="staff" className="syllabus-topic">
            <h2>
                Staff
            </h2>
            <div className="syllabus-section">
                <div className="syllabus-subsection">
                    <div className="header">
                        Head Teaching Assistant
                    </div>
                    <div className="body">
                        <strong>Head TA Murtaza Ali</strong> will run the course at a high level and is the point of 
                        contact for questions when you do not know who to reach out to. For any high-level 
                        course questions, reach out to Murtaza before Dan. He will also teach a discussion 
                        section.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Lead Teaching Assistants
                    </div>
                    <div className="body">
                        <strong>Lead Administrative TA Isaac Merritt, Lead Lab TA Kathleen Gao, Lead Exam TA Max Yao, 
                            and Lead Discussion TA Patricia Yu</strong> have course-wide administrative duties. Each 
                            Lead TA will also teach a section.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Teaching Assistants
                    </div>
                    <div className="body">
                        Teaching assistants will focus their efforts on teaching a particular component of the course, 
                        either lab or discussion. Some TAs may also spearhead different areas of course development. 
                        <strong>
                            Lab TAs: Bryant Bettencourt, Lam Pham, and Shannon Hearn. Discussion TAs: Yolanda Shen, Andrew 
                            Burke, and Dani Swords.
                        </strong>
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Readers
                    </div>
                    <div className="body">
                        Readers will be in charge of grading for the semester. The readers for the course are <strong>Samhita Sen, 
                        Aayush Shah, Taroob Zia, and Sarah Varghese</strong>. Please reach out to the <strong>Head Reader, Kellyann Ye</strong>, for 
                        any grading-related questions.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Tutors
                    </div>
                    <div className="body">
                        Tutors will primarily be running the check-in groups mentioned above. The tutors for the course are  
                        <strong> Nicholas Lai and Gowri Somayajula</strong>. Please reach out to the tutors if you have any concerns about your 
                        ability to keep pace with the course, and they will connect you to the right person or resource needed 
                        to assist you.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Technology() {
    return (
        <div id="course-tech" className="syllabus-topic">
            <h2>
                Course Technologies
            </h2>
            <div className="syllabus-section">
                <div className="syllabus-subsection">
                    <div className="header">
                        Zoom
                    </div>
                    <div className="body">
                        The primary medium for all synchronous portions of the course.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Google Drive + Youtube
                    </div>
                    <div className="body">
                        We will release recordings for the course via this platform.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Piazza
                    </div>
                    <div className="body">
                        The class forum for all questions and communication regarding the course.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Gradescope
                    </div>
                    <div className="body">
                        This is where assignments will be turned in and graded.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        PrairieLearn
                    </div>
                    <div className="body">
                        This is where exams will be taken.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        Discord
                    </div>
                    <div className="body">
                        A video conferencing/social community platform where you’ll be able to collaborate 
                        and communicate with course staff as well as other students. Labs will be held via Discord.
                    </div>
                </div>
                <div className="syllabus-subsection">
                    <div className="header">
                        This website!
                    </div>
                    <div className="body">
                        This is the central hub for all information about the course.
                    </div>
                </div>
            </div>
        </div>
    )
}

function Grading() {

    let breakdownData = {
        labels: ["Exams", "Projects", "Labs", "Reading Responses", "Attendance"],
        datasets: [{
            data: [200, 225, 30, 20, 25],
            backgroundColor: ["#0074FD", "#38CA05", "#F3B200", "#8445C2", "#FF4B4B"]
        }]
    }

    let chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1
    }

    return (
        <div id="grading" className="syllabus-topic">
            <div className="syllabus-section">
                <div className="header">
                    Grading Scheme
                </div>
                <div className="body">
                    The course will be graded out of <strong>500 points</strong>, and there is no curve.
                    The grading breakdown and bins can be found below.
                </div>
            </div>
            <div className="syllabus-section">
                <div className="header">
                    Grading Breakdown
                </div>
                <div classname="body">
                    <Doughnut 
                        id="breakdown-chart"
                        data={breakdownData} 
                        options={chartOptions}
                    />
                </div>
            </div>
        </div>
    )
}

function AcademicIntegrity() {
    return (
        <div className="syllabus-topic">
            <h2 id="integrity">
                Academic Integrity
            </h2>
            <div className="syllabus-section">
                <div className="body">
                    Cooperation has a limit and in CS10 that limit is copying lines of code or using ideas that 
                    are not your own code. Projects should be completed and turned in individually unless the 
                    project calls for a partner. Feel free to discuss the projects with others beforehand; just 
                    submit your own work in the end. By discussing assignments, we mean talking about high level 
                    ideas (for example, you may discuss how to debug and clarify the spec questions; you may not 
                    discuss the solution). Projects are to be completed in groups of 2 or 3, but you may discuss 
                    them more broadly than with your partner(s). However, you should not be sharing lines of code 
                    with others or reading code from other people's projects. Write your own programs and keep them 
                    to yourself.
                </div>
                <div className="body">
                    We expect you to hand in your own work, take your own tests, and complete your own projects. The assignments 
                    and evaluations are structured to help you learn. The course staff works hard to put together this course, 
                    and we ask in return that you respect the integrity of the course by not misrepresenting your work.
                </div>
                <div className="body">
                    The EECS Department Policy on Academic Dishonesty says, "Copying all or part of another person's 
                    work, or using reference materials not specifically allowed, are forms of cheating and will not be 
                    tolerated." The policy statement goes on to explain the penalties for cheating, which range from a zero
                    grade for the test up to dismissal from the University for a second offense.
                </div>
                <div className="body">
                    Rather than copying someone else's work, ask for help. You are not alone in this course! The TAs, 
                    academic interns, and instructor are all here to help you succeed. If you ever need help in this course, 
                    let us know in person, during office hours, or via email/Piazza.
                </div>
                <div className="body">
                    If you have any question as to if what you are doing constitutes academic dishonesty, please reach 
                    out to a staff member. If any academic dishonesty is detected, saying, “I did not know that was academic 
                    dishonesty,” will not be accepted.
                </div>
            </div>
        </div>
    )
}

export default SyllabusPage;