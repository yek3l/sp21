import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Head } from "../components/head.jsx";
import "../styles/main.scss";

class Exams extends React.Component {

    render() {
        return(
            <>
                <Head />
                <NavigationBar />
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Quest</th>
                                <th>Midterm (Paper)</th>
                                <th>Midterm (Online)</th>
                                <th>Final (Paper)</th>
                                <th>Final (Online)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Spring 2020</td>
                                <td>
                                    <p><a href="https://drive.google.com/file/d/1sCleoTMSogFmyihz1-ns71riunWtl1ir/view?usp=sharing" target="_blank"> Exam </a> | <a href="https://drive.google.com/file/d/1lSs3TXCJrqB22zgLBByZTI1-5ITqfE9K/view?usp=sharing" target="_blank">Solutions</a></p></td>
                                <td>-</td>
                                <td>-</td>
                                <td>
                                    <p><a href="https://drive.google.com/file/d/1IXByRzNhPgjmiDDb9kufU4x02Gx2xI9C/view?usp=sharing" target="_blank"> Exam </a> | <a href="https://drive.google.com/file/d/192pX5wig1Y-2p9OVktznTe0Obf5faode/view?usp=sharing" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="https://drive.google.com/file/d/1ZuWs6FWDZAsVCJSDLiPXIfLePhm-eBfT/view?usp=sharing" target="_blank"> Exam </a> | <a href="https://drive.google.com/file/d/1yEzOB_eSSu4HC_RSUsx7ei77j66dhCeY/view?usp=sharing" target="_blank">Solutions</a></p></td>
                            </tr>
                            <tr>
                                <td>Fall 2019</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/quest/2019Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/quest/2019Fa/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2019Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/midterm/2019Fa/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2019Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2019Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Summer 2019</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/quest/2019Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/quest/2019Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2019Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/midterm/2019Su/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Spring 2019</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/quest/2019Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/quest/2019Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2019Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/midterm/2019Sp/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2019Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2019Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2019Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-final/2019Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-final/2019Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                            </tr>
                            <tr>
                                <td>Fall 2018</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/quest/2018Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/quest/2018Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2018Fa/exam1.pdf" target="_blank"> Exam 1 </a> | <a href="http://cs10.org/sp20/exams/midterm/2018Fa/answers1.pdf" target="_blank">Solutions</a><br />
                                        <a href="http://cs10.org/sp20/exams/midterm/2018Fa/exam2.pdf" target="_blank"> Exam 2 </a> | <a href="http://cs10.org/sp20/exams/midterm/2018Fa/answers2.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2018Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2018Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-final/2018Fa/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-final/2018Fa/answers.pdf" target="_blank">Solutions</a> </p></td>
                            </tr>
                            <tr>
                                <td>Summer 2018</td>
                                <td>--</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2018Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/midterm/2018Su/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2018Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2018Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-final/2018Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-final/2018Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                            </tr>
                            <tr>
                                <td>Spring 2018</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/quest/2018Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/quest/2018Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2018Sp/exam1.pdf" target="_blank"> Exam 1 </a> | <a href="http://cs10.org/sp20/exams/midterm/2018Sp/answers1.pdf" target="_blank">Solutions</a><br />
                                        <a href="http://cs10.org/sp20/exams/midterm/2018Sp/exam2.pdf" target="_blank"> Exam 2 </a> | <a href="http://cs10.org/sp20/exams/midterm/2018Sp/answers2.pdf" target="_blank">Solutions</a></p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-midterm/2018Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2018Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2018Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/in-lab-final/2018Sp/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/in-lab-final/2018Sp/answers.pdf" target="_blank">Solutions</a> </p></td>
                            </tr>
                            <tr>
                                <td>Summer 2017</td>
                                <td>--</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/midterm/2017Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/midterm/2017Su/answers.pdf" target="_blank">Solutions</a></p></td>
                                <td>--</td>
                                <td>
                                    <p><a href="http://cs10.org/sp20/exams/final/2018Su/exam.pdf" target="_blank"> Exam </a> | <a href="http://cs10.org/sp20/exams/final/2018Su/answers.pdf" target="_blank">Solutions</a> </p></td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Exams;