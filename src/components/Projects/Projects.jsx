import React from 'react';

// styles
import './Projects.css';

const projects = [
  {
    title: "Пряжка для трикотажних виробів",
    icon: "https://capron.com.ua/image/catalog/PPMacrameXL4mmBlack.jpg",
    description: "Трикотажна пряжа являє собо й довгу стрічку шириною від 5 до 20 мм, намотану на клубок або бобіну. Це дуже велика пряжа, вона відмінно тримає форму, тому готові вироби виходять повітряними і фактурними, незалежно від типу в'язання."
  },

  {
    title: "Кордні тканини",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mansestr.jpg/2560px-Mansestr.jpg",
    description: "Вовняна тканина особливого переплетення, що створює на її лицьовій поверхні поздовжні рубчики шириною близько 3-8 мм."
  },

  {
    title: "Рибальські сітки",
    icon: "https://images.prom.ua/1026312849_deli-ribalski-nitkovi.jpg",
    description: "Рибальські сітки відомі людству не одну сотню років. Це один з найдавніших інструментів, які допомагають людям добувати їжу з річок, морів і океанів."
  }
];

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <h1 className="projects__title">Вироби</h1>

      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="projects__container__card" key={index}>
            <img className="projects__container__card-icon" src={project.icon} alt={project.title} />
            <h2 className="projects__container__card-title">{project.title}</h2>
            <p className="projects__container__card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
