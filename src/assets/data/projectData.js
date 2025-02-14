import DVProject from "../DVProject.png";
import DDProject from "../DDProject.png";
import QuaminProject from "../exp-4.png";
import GridFrequencyReport from "../pdf/14519051622_EshaanGupta_AIML_ST.pdf";
import FacialRecognitionReport from "../pdf/FacialRecognitionReport.pdf";
import CloudComputingProject from "../pdf/CloudComputingProject.pdf";

const GitHubProject = "/GitHubProject.png";

const project = [
  {
    img: QuaminProject,
    title: "Quamin LLP website:",
    desc: "During my internship at Quamin, i developed a MERN stack website for the company along with an admin panel from where whole website can be controlled.",
    link: "https://quamin.in/",
  },
  {
    img: DVProject,
    title: "Dant Villa dental clinic website:",
    desc: "I developed a clinic website using React.js and Vanilla CSS, allowing patients to explore services, read about doctors, and stay updated on activities. They can contact the clinic via email, WhatsApp, or phone directly through the site.",
    link: "https://www.dantvilla.com/",
  },

  {
    img: DDProject,
    title: "DineDash - Online Food Delivery Web Application:",
    desc: " Using MERN stack, i developed a complete food delivery web application where user can log in , order food and even implemented payment gateway using Stripe. I even developed an admin panel from where the admin can track orders and even update the the items in the menu.",
    link: "https://dinedash101.netlify.app/",
  },

  {
    img: GitHubProject,
    title:
      "Grid Frequency Prediction using Machine Learning Models and Time Series Analysis:",
    desc: " During my internship at Reliance, I conducted exploratory data analysis and developed a machine learning model that can help to predict the grid frequencies.",
    readLink: "Click here to read the project report.",
    pdfLink: GridFrequencyReport,
    link: "https://github.com/EshaanGupta1011/GridFrequencyPrediction",
  },

  {
    img: GitHubProject,
    title:
      "Korero - A machine learning model that converts ISL to text/speech:",
    desc: "I participated in SRM Hackhound 8.0 and developed a machine learning platform that converts indian sign language (ISL) to text or speech in real time, using device’s web camera. ",
    link: "https://github.com/EshaanGupta1011/Korero",
  },

  {
    img: GitHubProject,
    title:
      "Vigyaan - A machine learning platform to conduct machine learning model training and conduct exploratory data analysis:",
    desc: "I developed a machine learning platform that can perform ML model training on user entered data using a virtual machine from Oracle and can perform exploratory data analysis easily on user specified data or pre-loaded datasets.",
    link: "https://github.com/EshaanGupta1011/ML_Platform_Frontend",
  },

  {
    img: GitHubProject,
    title:
      "Delhi Electricity Power Demand predicting machine learning model using LSTM and Echo State Networks:",
    desc: "I participated in SIH 2024 and presented a full web application with an intutive UI, a working backend and a machine learning model that can predict electricity demand using data extracted from SLDC and features uniquely extracted and identified by us.",
    link: "https://github.com/EshaanGupta1011/SIH",
  },

  {
    img: GitHubProject,
    title:
      "Facial Expression Detection and checking the accuracy by various ML models:",
    desc: "I developed several machine learning models and conducted a series of test and research about how different machine learning algorithms perform the task of identifying facial expressions. ",
    readLink: "Click here to read the project report.",
    pdfLink: FacialRecognitionReport,
    link: "https://github.com/EshaanGupta1011/Facial-Recognition",
  },

  {
    img: GitHubProject,
    title:
      "Use of Apache Web Hosting Service to host websites on the internet and uploading Sentiment Analysis Model on the same server.",
    desc: "We developed a website hosting service using apache web hosting services on a virtual machine using Linux. To showcase our work, we also developed a sentiment analyzer that is trained on various tweets and predicts the sentiment of the sentence entered by the user. Moreover, we also applied a load balancer and introduced horizontal scaling to monitor the traffic and divert it accordingly using Round Robin Algorithm. ",
    readLink: "Click here to read the project report.",
    pdfLink: CloudComputingProject,
    link: "https://github.com/EshaanGupta1011/CDEF-",
  },
];

export default project;
