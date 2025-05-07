import React, { useState, useEffect } from 'react';
import Navbar from "../../Navbar/Navbar";
import "./Post.css";



const Post01 = () => {
  return (
    <header>
      <Navbar/>
        <div className="blog-container">
        <div className="post-box">
          <h1>Rocket X GDYT X WSU</h1>
          <p>April 11, 2025</p>
          <h2>What Did I Do?</h2>
            <p>
              In the spring of 2024, I received a broadcast notification from the Honors College at Wayne State University to apply for the Rocket Mortgage, Grow Detroit’s Young Talent, and WSU Honors College program to mentor Detroit Public School students. I applied and the program accepted me, so during the summer of 2024, I had the amazing opportunity to mentor Detroit Public School students in the field of technology.
            </p>
            <p>
              My job as a technology mentor gave me powerful insight into the younger generations. Since my job required me to teach high school students, I got to know the students and their aspirations for the coming years. One student recently graduated high school and wished to pursue engineering at the University of Michigan. Another student is determined to become a real estate agent and start his own business. A student also wanted to create his own video game from scratch. As a college student, witnessing the growth and beginnings of younger students brings hope and inspiration to me. Younger generations need opportunities to grow. Programs like this one provide amazing opportunities for both high school students and college students like myself.
            </p>

            <h2>How I Planned Curriculum</h2>
            <p>
              I joined a supportive coaching team to help students learn coding. The program began with playful icebreaker games that stimulated creative thinking. While students participated in these activities, each mentor planned a project proposal and curriculum for a small group of students. Leveraging my computer science expertise, programming education, and tutoring background, I designed a brick breaker game project knowing that it would both challenge students and reward them with an enjoyable finished product they could proudly play.
            </p>
            <p>
              My goal was to educate the students about the main concepts of logical statements, for loops, while loops, variables, and simple game animation. To accomplish this goal, I structured the lessons in learnable chunks. The first focus would be on creating and moving a rectangle (the platform) which requires learning variables and library calls. The second focus would be on creating/moving a circle (the ball) and collision detection using logical if/else statements and while loops. The final focus would be creating multiple rectangles (the bricks) using a more complex combination of collision detection.
            </p>

            <h2>Teaching Strategies</h2>
            <p>
              With only six weeks to create and present a final project, I had to stick to a tight schedule. To be efficient, I applied some of the teaching strategies I learned from my time tutoring such as a questioning technique, where I give my students time to answer the questions they ask instead of answering the question for them. This technique allows the students to figure things out by themselves instead of relying on my knowledge every time.
            </p>
            <p>
              Another technique I would use is pausing after asking them a question. If I was teaching them a new concept such as if/else statements, I would ask them the functionality of some lines of code. Then I would wait and give them time to respond, allowing the students to form their own thoughts which stimulates learning. Believe it or not, waiting for a response is harder than it seems. The students might need some time to think, but even a little bit of extra time is necessary for them to think of an answer.
              </p>
            <h2>Industry Insights</h2>
            <p>
            Of course, we would spend most of our time teaching and learning, but on some days we would have industry workers come in to speak to all of us. One worker, a product manager at Rocket, explained the responsibilities of his work and important skills that he needed to use on a daily basis. Another worker, a cyber security educator, also came in to warn of cyber attacks, dangerous spam, and to emphasize the importance of internet safety. There were several others that talked, and throughout each of these talks and presentations, the students learned firsthand the possible paths they could take from education all the way to sales, through the path of technology.
            </p>

            <h2>Final Presentation</h2>
            <p>
            During the final weeks of the program, the students focused on creating a presentation that showcased the skills they learned, how they applied them to the project, and a demonstration of the final project. This presentation stood as a final test of their understanding. Moreover, my students explained the concepts they learned and implemented within the project, while also denoting their obstacles and advantages.
            </p>
            <p>
            As I expected, the most grueling task for them was creating arrays of bricks. I planned the curriculum with this thought in mind, so the concepts built up in difficulty while each concept also acted as a building block for the next. This teaching concept can also be applied to large tasks that seem daunting, but in reality the large task could be broken up into easier segments.
            </p>

            <h2>Reflection</h2>
            <p>
            Personally, I improved my own skills in tutoring and teaching. Because I was able to exercise my tutoring skills in a new environment, I now understand better methods of mentoring in the field of programming. For example, when I taught my three students of different skill levels from separate backgrounds, understanding where each student is coming from greatly improved my teaching strategy.
            </p>
            <p>
            As the project wrapped up, I realized that some of these students were going to be engineers or entrepreneurs in a few years. Although we taught small projects, I think the impact that we left on them was similar to the impact I had when I took those beginner high school classes. Maybe they were never going to look at the projects again, but I know that they will carry the skills with them wherever they go.
            </p>
          </div>
        </div>
    </header>
  );
};

export default Post01;