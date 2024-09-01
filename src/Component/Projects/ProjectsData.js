
import Movie from './IMG/movie.png'
import Todo from './IMG/Todo.png'
import WeatherApp from './IMG/WeatherApp.png'

const ProjectsData = [
    {
        "id": 1,
        "projectName": "To-Do",
        "projectIMG": Todo,  
        "projectStatus": "Inompleted",  
        "projectDetails": " This is a simple to-do website where User can add tasks and create an account using an email ID. For backend, I used Firebase in this project.  ",
        "usedLanguage": ["React", "CSS", "Bootstrap", "Firebase"],  // Array of languages
        "projectLink": "https://todo-list-523j.onrender.com/",
        "projectCode": "https://github.com/Sunil-Harde/-ToDo_List",
    },

    {
        "id": 2,
        "projectName": "Weather-App",
        "projectIMG": WeatherApp,
        "projectStatus": "Completed",  
        "projectDetails": "This is a simple application that shows current weather conditions for any location. This project helped me improve my skills in managing state and making API calls with React.",
        "usedLanguage": ["React", "CSS", "Bootstrap"],
        "projectLink": "https://weather-16ms.onrender.com/",
        "projectCode": "https://github.com/Sunil-Harde/Weather",
    },

    {
        "id": 3,
        "projectName": "Movies Detail",
        "projectIMG": Movie,
        "projectStatus": "Completed",  
        "projectDetails": "This is a simple website that shows movie details and also recommends popular, latest movies. This project helped me improve my skills in API calls with React.",
        "usedLanguage": ["React", "CSS"],
        "projectLink": "https://moviesinfos.netlify.app/",
        "projectCode": "https://github.com/Sunil-Harde/MovieDb",
    },
];

export default ProjectsData;
