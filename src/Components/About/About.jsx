// import React from 'react';

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-4 bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white">
//       <div className="mb-16 text-center">
//         <h2 className="text-4xl font-bold mb-8">About Me</h2>
//         <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
//           Hi! I’m Kunal Latta, a frontend developer with a B.Tech in Computer Science from the College of Engineering, Bikaner. My journey into web development began with a fascination for technology and how it shapes our world. I specialize in HTML, CSS, JavaScript, and React.js, along with Redux for state management. My experience with Bootstrap and Tailwind CSS enables me to create responsive and engaging user interfaces. Thank you for visiting my page, and I invite you to check out my projects!
//         </p>
//       </div>

//       <div className="mb-16">
//         <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind', 'Bootstrap', 'Git', 'C++', 'DSA', 'OOPs', 'Communication','Node.js','MongoDB','Express.js'].map((skill) => (
//             <div key={skill} className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-700 transform hover:scale-105 transition">
//               <span className="text-xl font-semibold">{skill}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-16">
//         <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               title: 'MERN Stack Developer',
//               date: '15/02/2024 - Present',
//               company: 'REGex Software Services',
//               tasks: [
//                 'Developed and maintained responsive web applications using React.',
//                 'Utilized HTML, CSS, Bootstrap, and Tailwind to create layouts.',
//                 'Managed state using Redux for performance optimization.',
//                 'Integrated MongoDB, Express.js, and Node.js for backend development, creating robust and scalable APIs.',
//                 'Collaborated in an Agile environment for sprint planning and reviews.',
//               ],
//             },
//             {
//               title: 'Frontend Developer (Freelancer)',
//               date: '01/02/2023 - 10/02/2023',
//               company: 'Freelancer',
//               tasks: [
//                 'Worked on frontend development projects using React.js, HTML, and CSS.',
//                 'Built responsive UIs with Tailwind CSS for various clients.',
//               ],
//             },
//             {
//               title: 'Web Developer Trainee',
//               date: '10/04/2021 - 19/06/2021',
//               company: 'Internshala',
//               tasks: [
//                 'Completed a 2-month training in Web Development.',
//                 'Specialized in HTML, CSS, JavaScript and Bootstrap for responsive websites.',
//               ],
//             },
//           ].map((exp, index) => (
//             <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//               <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
//               <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
//               <p className="font-semibold mb-4">Company: {exp.company}</p>
//               <ul className="list-disc pl-5 space-y-2 text-gray-400">
//                 {exp.tasks.map((task, i) => (
//                   <li key={i}>{task}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               school: 'Y.B SCHOOL, Bikaner',
//               date: '2017 - 2018',
//               level: 'High School',
//             },
//             {
//               school: 'UCET, BIKANER',
//               date: '2018 - 2022',
//               level: 'B.Tech - Computer Science Engineering',
//             },
//           ].map((edu, index) => (
//             <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
//               <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
//               <p className="text-lg font-semibold text-orange-400">{edu.date}</p>
//               <p className="text-sm text-gray-300">{edu.level}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-indigo-900 via-purple-800 to-blue-900 text-white">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          Hi! I’m Kunal Latta, a frontend developer with a B.Tech in Computer Science from the College of Engineering, Bikaner. My journey into web development began with a fascination for technology and how it shapes our world. I specialize in HTML, CSS, JavaScript, and React.js, along with Redux for state management. My experience with Bootstrap and Tailwind CSS enables me to create responsive and engaging user interfaces. Thank you for visiting my page, and I invite you to check out my projects!
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Tailwind', 'Bootstrap', 'Git', 'C++', 'DSA', 'OOPs', 'Communication','Node.js','MongoDB','Express.js'].map((skill) => (
            <div key={skill} className="p-4 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-700 transform hover:scale-105 transition">
              <span className="text-xl font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'MERN Stack Developer',
              date: '15/02/2024 - 15/11/2024',
              company: 'REGex Software Services',
              tasks: [
                'Developed and maintained responsive web applications using React.',
                'Utilized HTML, CSS, Bootstrap, and Tailwind to create layouts.',
                'Managed state using Redux for performance optimization.',
                'Integrated MongoDB, Express.js, and Node.js for backend development, creating robust and scalable APIs.',
                'Collaborated in an Agile environment for sprint planning and reviews.',
              ],
            },
            // {
            //   title: 'Frontend Developer (Freelancer)',
            //   date: '24/01/2023 - 24/01/2024',
            //   company: 'Freelancer',
            //   tasks: [
            //     'Worked on frontend development projects using React.js, HTML, and CSS.',
            //     'Built responsive UIs with Tailwind CSS for various clients.',
            //   ],
            // },
            // {
            //   title: 'Web Developer Trainee',
            //   date: '10/04/2021 - 19/06/2021',
            //   company: 'Internshala',
            //   tasks: [
            //     'Completed a 2-month training in Web Development.',
            //     'Specialized in HTML, CSS, JavaScript and Bootstrap for responsive websites.',
            //   ],
            // },
          ].map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
              <p className="font-semibold mb-4">Company: {exp.company}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-400">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              school: 'Y.B SCHOOL, Bikaner',
              date: '2017 - 2018',
              level: 'High School',
            },
            {
              school: 'UCET, BIKANER',
              date: '2018 - 2022',
              level: 'B.Tech - Computer Science Engineering',
            },
          ].map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
              <p className="text-lg font-semibold text-orange-400">{edu.date}</p>
              <p className="text-sm text-gray-300">{edu.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
