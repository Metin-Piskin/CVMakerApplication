import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import FileViewer from 'react-native-file-viewer';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import İnputBox from './Component/İnputBox';
import İnput from './Component/İnput';
import PlusButton from './Component/PlusButton';
import Skills from './Component/Skills';
import EducationsBox from './Component/EducationsBox';
import ProjectsBox from './Component/ProjectsBox';
import ExperiencesBox from './Component/ExperiencesBox';
import TemplatBox from './Component/TemplatBox';

import LinkData from './Data/LinkData.json';

const App = () => {
  const [aboutModalVisible, setAboutModalVisible] = useState<boolean>(false);
  const [skillsModalVisible, setSkillsModalVisible] = useState<boolean>(false);
  const [educationsModalVisible, setEducationsModalVisible] =
    useState<boolean>(false);
  const [projectsModalVisible, setProjectsModalVisible] =
    useState<boolean>(false);
  const [experiencesModalVisible, setExperiencesModalVisible] =
    useState<boolean>(false);
  const [InputLink, setInputLink] = useState<Array<any>>([]);
  const [status, setStatus] = useState('TemplatsBir');

  const [imageGallery, setImageGallery] = useState<any>(null);

  const [toolsSkillsText, setToolsSkillsText] = useState<Array<any>>([]);
  const [toolsSkills, setToolsSkills] = useState<Array<any>>([]);

  const [industryKnowledgeText, setIndustryKnowledgeText] = useState<
    Array<any>
  >([]);
  const [industryKnowledge, setIndustryKnowledge] = useState<Array<any>>([]);

  const [languagesText, setLanguagesText] = useState<Array<any>>([]);
  const [languages, setLanguages] = useState<Array<any>>([]);

  const [educationsFormData, setEducationsFormData] = useState<Array<any>>([]);
  const [projectsFormData, setProjectsFormData] = useState<Array<any>>([]);
  const [experiencesFormData, setExperiencesFormData] = useState<Array<any>>(
    [],
  );

  const initialFormValues = {
    NameSurname: '',
    Job: '',
    Location: '',
    About: '',

    Mail: '',
    Portfolio: '',
    Github: '',
    Twitter: '',
    LinkedIn: '',
    Instagram: '',
    Facebook: '',
  };

  const openGallery = () => {
    const option: any = {
      mediaType: 'photo',
      qualiy: 1,
    };

    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data: any = res.assets;
        setImageGallery(data[0]);
      }
    });
  };

  const generatePdf = async (formValues: any) => {
    const TemplatsBir = `
            <html>
            <head>
                    <style>
                        body {
                            font-family: 'Helvetica';
                            font-size: 12px;
                        }
                        table {
                            max-width: 100%; 
                            width: 100%;
                            border-collapse: collapse;
                        }
                        td {
                            max-width: 50%; 
                            width: 50%;
                            word-break: break-all;
                            text-align: center
                        }
                        tr {
                            max-width: 100%; 
                            width: 100%;
                        }
                        
                    </style>
                </head>
                <body>
                    <div style='display:inline-flex; justify-content: space-around; width: 100%;  max-width: 100%; '>
                        <img src="${
                          imageGallery?.uri
                        }" style="width:100px;height:100px;">
                        <div >
                            <h3>Name Surname: ${formValues.NameSurname}</h3>
                            <h3>Job: ${formValues.Job}</>
                            <h3>Location: ${formValues.Location}</h3>
                        </div>
                        <p style="word-break: break-all; max-width: 30%;">About: ${
                          formValues.About
                        }</p>
                    </div>
                    <div align=”justify” style="style="word-break: break-all; ">
                        ${
                          formValues.Mail &&
                          `<a href="${formValues?.Mail}">${formValues?.Mail}</a>`
                        }
                        ${
                          formValues.Portfolio &&
                          `<a href="${formValues?.Portfolio}">${formValues?.Portfolio}</a>`
                        }
                        ${
                          formValues.Github &&
                          `<a href="https://github.com/${formValues?.Github}"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png" style="width:10px;height:10px;">${formValues?.Github}</a>`
                        }
                        ${
                          formValues.Twitter &&
                          `<a href="https://twitter.com/${formValues?.Twitter}"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" style="width:10px;height:10px;">${formValues?.Twitter}</a>`
                        }
                        ${
                          formValues.LinkedIn &&
                          `<a href="https://www.linkedin.com/in/${formValues?.LinkedIn}/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" style="width:10px;height:10px;">${formValues?.LinkedIn}</a>`
                        }
                        ${
                          formValues.Instagram &&
                          `<a href="https://www.instagram.com/${formValues?.Instagram}/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" style="width:10px;height:10px;">${formValues?.Instagram}</a>`
                        }
                        ${
                          formValues.Facebook &&
                          `<a href="https://www.facebook.com/${formValues?.Facebook}/"><img src="https://www.facebook.com/images/fb_icon_325x325.png" style="width:10px;height:10px;">${formValues?.Facebook}</a>`
                        }
                    </div>
                    <div style='display:inline-flex; justify-content: space-around;'>
                        <div style='max-width: 50%;  width: 50%; '>
                            <h3 style="text-align: center; color:#FB7487;">Tools Skills</h3>
                            <div>${toolsSkills.map(e => {
                              return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                            })}</div>
                        </div>
                        <div style='max-width: 50%;  width: 50%; '>
                            <h3 style="text-align: center; color:#FB7487;">Industry Knowledge</h3>
                            <div>${industryKnowledge.map(e => {
                              return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                            })}</div>
                        </div>
                        <div style='max-width: 50%;  width: 50%; '>
                            <h3 style="text-align: center; color:#FB7487;">Languages</h3>
                            <div> ${languages.map(e => {
                              return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                            })}</div>
                        </div>
                    </div>
                    <table border="1" border-collapse: collapse; style="max-width: 100%; width: 100%;">
                        <h2 style="text-align: center; color:#FB7487;">Educations</h2>
                        ${educationsFormData.map(e => {
                          return `   
                            <table border="1" border-collapse: collapse;> 
                                <tr>
                                    <td>Field of studyon</td>
                                    <td>${e.studyon}</td>
                                </tr>
                                <tr>
                                    <td>School</td>
                                    <td>${e.school}</td>
                                </tr>
                                <tr>
                                    <td>Start date</td>
                                    <td>${e.educationsStart}</td>
                                </tr>
                                <tr>
                                    <td>End date</td>
                                    <td>${e.educationsEnd}</td>
                                </tr>
                            </table> 
                        `;
                        })}
                    </table>
                    <table border="1" border-collapse: collapse;>
                        <h2 style="text-align: center; color:#FB7487;">Projects</h2>
                        ${projectsFormData.map(e => {
                          return `
                            <table border="1" border-collapse: collapse;> 
                                <tr>
                                    <td>Project Title</td>
                                    <td>${e.ProjectTitl}</td>
                                </tr>
                                <tr>
                                    <td>Project Link</td>
                                    <td><a href="${e.ProjectLink}">${e.ProjectLink}</a></td>
                                </tr>
                                <tr>
                                    <td>Project Summaryon</td>
                                    <td>${e.ProjectSummaryon}</td>
                                </tr>
                            </table> 
                        `;
                        })}
                    </table>
                        <table border="1" border-collapse: collapse;>
                            <h2 style="text-align: center; color:#FB7487;">Experiences</h2>
                        ${experiencesFormData.map(e => {
                          return `
                                <table border="1" border-collapse: collapse;> 
                                    <tr>
                                        <td>Positionon</td>
                                        <td>${e.Positionon}</td>
                                    </tr>
                                    <tr>
                                        <td>Companyon</td>
                                        <td>${e.Companyon}</td>
                                    </tr>
                                    <tr>
                                        <td>Summaryon</td>
                                        <td>${e.Summaryon}</td>
                                    </tr>
                                    <tr>
                                        <td>Start date</td>
                                        <td>${e.ExperiencesStart}</td>
                                    </tr>
                                    <tr>
                                        <td>End date</td>
                                        <td>${e.ExperiencesEnd}</td>
                                    </tr>
                                </table> 
                            `;
                        })}
                    </table>
                </body>
            </html>
                `;
    const Templatsİki = `
                <html>
             <head>
             <style>
                 body {
                     font-family: 'Helvetica';
                     font-size: 12px;
                     display:inline-flex;
                 }
                 div {
                     max-width: 100%; 
                     width: 100%;
                 }
                 a {
                     display: block;
                 }
             </style>
         </head>
        <body>
         <div style="text-align: center; padding: 10px; background-color: #CEE4FE; border-radius: 20px; max-width: 35%; word-break: break-all;">
             <div style="align-content: center;">
                 <img 
                     src="${imageGallery?.uri}" 
                     style="width:100px;height:100px; border-radius: 10px;"
                 >
                 <h3>${formValues.NameSurname}</h3>
                 <h3>${formValues.Job}</h3>
                 <h3>${formValues.Location}</h3>
             </div>
             ${
               formValues.Mail &&
               `<a href="${formValues?.Mail}">${formValues?.Mail}</a>`
             }
             ${
               formValues.Portfolio &&
               `<a href="${formValues?.Portfolio}">${formValues?.Portfolio}</a>`
             }
             ${
               formValues.Github &&
               `<a href="https://github.com/${formValues?.Github}"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png" style="width:10px;height:10px;">${formValues?.Github}</a>`
             }
             ${
               formValues.Twitter &&
               `<a href="https://twitter.com/${formValues?.Twitter}"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" style="width:10px;height:10px;">${formValues?.Twitter}</a>`
             }
             ${
               formValues.LinkedIn &&
               `<a href="https://www.linkedin.com/in/${formValues?.LinkedIn}/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" style="width:10px;height:10px;">${formValues?.LinkedIn}</a>`
             }
             ${
               formValues.Instagram &&
               `<a href="https://www.instagram.com/${formValues?.Instagram}"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" style="width:10px;height:10px;">${formValues?.Instagram}</a>`
             }
             ${
               formValues.Facebook &&
               `<a href="https://www.facebook.com/${formValues?.Facebook}/"><img src="https://www.facebook.com/images/fb_icon_325x325.png" style="width:10px;height:10px;">${formValues?.Facebook}</a>`
             }
             <div >
                 <div>
                     <h3 style="text-align: center; color:#FB7487;">Tools Skills</h3>
                     <div>${toolsSkills.map(e => {
                       return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                     })}</div>
                 </div>
                 <div>
                     <h3 style="text-align: center; color:#FB7487;">Industry Knowledge</h3>
                     <div> ${industryKnowledge.map(e => {
                       return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                     })}</div>
                 </div>
                 <div>
                     <h3 style="text-align: center; color:#FB7487;">Languages</h3>
                     <div> ${languages.map(e => {
                       return ` <p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                     })}</div>
                 </div>
             </div>
         </div>
         <div>
             <div style=" word-break: break-all; text-align: center; background-color: #CEE4FE; border-radius: 10px; margin-left: 5px;">
                 <p style="word-break: break-all; padding: 8px;">${
                   formValues.About
                 }</p>
             </div>
        
             <div>
                 <h2 style="text-align: center; color:#FB7487;">Educations</h2>
                 ${educationsFormData.map(e => {
                   return `  
                 <div style="word-break: break-all; text-align: center; background-color: #CEE4FE; border-radius: 10px; margin-left: 5px;">
                     <h4 style="padding-top: 8px;">${e.studyon}</h4>
                     <h4>${e.school}</h4>
                     <h4 style="padding-bottom: 8px;">${e.educationsStart} / ${e.educationsEnd}</h4>
                 </div>
                 `;
                 })}
             </div>
             <div>
                 <h2 style="text-align: center; color:#FB7487;">Projects</h2>
                 ${projectsFormData.map(e => {
                   return `
                 <a href="${e.ProjectLink}" style="text-decoration:none;color:black;">
                     <div style="word-break: break-all; text-align: center; background-color: #CEE4FE; border-radius: 10px; margin-left: 5px;">
                         <h4 style="padding-top: 8px;">${e.ProjectTitl}</h4>
                         <p style="padding-bottom: 8px;">${e.ProjectSummaryon}</p>
                     </div>
                 </a>
                 `;
                 })}
             </div>
             <div>
                 <h2 style="text-align: center; color:#FB7487;">Experiences</h2>
                 ${experiencesFormData.map(e => {
                   return `
                 <div style="word-break: break-all; text-align: center; background-color: #CEE4FE; border-radius: 10px; margin-left: 5px;">
                     <h4 style="padding-top: 8px;">${e.Positionon}</h4>
                     <h4>${e.Companyon}</h4>
                     <h4>${e.Summaryon}</h4>
                     <h4 style="padding-bottom: 8px;">${e.ExperiencesStart} / ${e.ExperiencesEnd}</h4>
                 </div> 
                 `;
                 })} 
             </div>
         </div>
        </body>
        </html>
             `;
    const TemplatsÜç = `
        </html>
        <head>
        <style>
            body {
                font-family: 'Helvetica';
                font-size: 12px;
                display:inline-flex;
            }
            div {
                max-width: 98%; 
                width: 98%;
            }
            a {
                display: block;
            }
        </style>
    </head>
   <body>
    <div style="text-align: center; padding: 10px; border-style: outset; border-radius: 20px; max-width: 35%; word-break: break-all;">
        <div style="align-content: center;">
            <img 
                src="${imageGallery?.uri}" 
                style="width:100px;height:100px; border-radius: 50px;"
            >  
        </div>
               ${
                 formValues.Mail &&
                 `<a href="${formValues?.Mail}">${formValues?.Mail}</a>`
               }
               ${
                 formValues.Portfolio &&
                 `<a href="${formValues?.Portfolio}">${formValues?.Portfolio}</a>`
               }
               ${
                 formValues.Github &&
                 `<a href="https://github.com/${formValues?.Github}"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png" style="width:10px;height:10px;">${formValues?.Github}</a>`
               }
               ${
                 formValues.Twitter &&
                 `<a href="https://twitter.com/${formValues?.Twitter}"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU" style="width:10px;height:10px;">${formValues?.Twitter}</a>`
               }
               ${
                 formValues.LinkedIn &&
                 `<a href="https://www.linkedin.com/in/${formValues?.LinkedIn}/"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" style="width:10px;height:10px;">${formValues?.LinkedIn}</a>`
               }
               ${
                 formValues.Instagram &&
                 `<a href="https://www.instagram.com/${formValues?.Instagram}"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" style="width:10px;height:10px;">${formValues?.Instagram}</a>`
               }
               ${
                 formValues.Facebook &&
                 `<a href="https://www.facebook.com/${formValues?.Facebook}/"><img src="https://www.facebook.com/images/fb_icon_325x325.png" style="width:10px;height:10px;">${formValues?.Facebook}</a>`
               }
       <div >
            <div>
                <h3 style="text-align: center; color:#FB7487;">Tools Skills</h3>
                <div>${toolsSkills.map(e => {
                  return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                })}</div>
            </div>
            <div>
                <h3 style="text-align: center; color:#FB7487;">Industry Knowledge</h3>
                <div> ${industryKnowledge.map(e => {
                  return `<p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                })}</div>
            </div>
            <div>
                <h3 style="text-align: center; color:#FB7487;">Languages</h3>
                <div> ${languages.map(e => {
                  return ` <p style='display:inline-flex; margin-top: 10px; margin-left: 20px;'>${e}</p>`;
                })}</div>
            </div>
        </div>
        <div>
            <h2 style="text-align: center; color:#FB7487;">Educations</h2>
            ${educationsFormData.map(e => {
              return `  
            <div style="word-break: break-all; text-align: center; border-radius: 10px; margin-left: 5px;">
                <h4 style="padding-top: 8px;">${e.studyon}</h4>
                <h4>${e.school}</h4>
                <h4 style="padding-bottom: 8px;">${e.educationsStart} / ${e.educationsEnd}</h4>
            </div>
            `;
            })}
        </div>
    </div>
    <div>
        <div style="margin-left: 8px;">
            <h3 style="font-size: xx-large;">${formValues.NameSurname}</h3>
            <h3 style="margin-top: -18px; color: #A6ACB8;">${
              formValues.Job
            } - ${formValues.Location}</h3>    
        </div>
        <div style=" word-break: break-all; border-radius: 10px; margin-left: 5px;">
            <p style="word-break: break-all; padding: 8px;">${
              formValues.About
            }</p>
        </div>
   
       
        <div style="margin-right: 10px;">
            <h2 style="text-align: center; color:#FB7487;">Projects</h2>
            ${projectsFormData.map(e => {
              return `
               <a href="${e.ProjectLink}" style="text-decoration:none;color:black;">
                   <div style="word-break: break-all; text-align: center; border-style: outset; border-radius: 10px; margin-left: 5px; margin-right: 10px;">
                   <h4>${e.ProjectTitl}</h4>
                   <p>${e.ProjectSummaryon}</p>
                   </div>
               </a>
            `;
            })} 
        </div>
        <div>
            <h2 style="text-align: center; color:#FB7487;">Experiences</h2>
            ${experiencesFormData.map(e => {
              return `
            <div style="word-break: break-all; text-align: center; border-style: outset; border-radius: 10px; margin-left: 5px; margin-right: 10px;">
               <h4 style="padding-top: 8px;">${e.Positionon}</h4>
               <h4>${e.Companyon}</h4>
               <h4>${e.Summaryon}</h4>
               <h4 style="padding-bottom: 8px;">${e.ExperiencesStart} / ${e.ExperiencesEnd}</h4>
           </div> 
        `;
            })}   
        </div>
    </div>
   </body>
   </html>
            `;
    const options = {
      html:
        (status === 'TemplatsBir' && TemplatsBir) ||
        (status === 'Templatsİki' && Templatsİki) ||
        (status === 'TemplatsÜç' && TemplatsÜç) ||
        '',
      fileName: formValues.NameSurname + 'Cv',
      directory: 'Pdf',
    };
    const file = await RNHTMLtoPDF.convert(options);
    Alert.alert(
      '✅ Kaydedildi',
      `Pdf Konumu= ${file.filePath}
                Pdf Adı= ${formValues.NameSurname}.pdf
                `,
      [
        {
          text: 'Pdf Aç',
          onPress: () => openFile(file.filePath),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const openFile = (filepath: any) => {
    const path = filepath;
    FileViewer.open(path);
  };

  const EducationsAddForm = () => {
    const newForm = {
      studyon: '',
      school: '',
      educationsStart: '',
      educationsEnd: '',
    };
    setEducationsFormData([...educationsFormData, newForm]);
  };

  const HandleEducationsFormChange = (index: any, field: any, value: any) => {
    const updatedFormData: any = [...educationsFormData];
    updatedFormData[index][field] = value;
    setEducationsFormData(updatedFormData);
  };

  const ProjectsAddForm = () => {
    const newForm = {
      ProjectTitl: '',
      ProjectLink: '',
      ProjectSummaryon: '',
    };
    setProjectsFormData([...projectsFormData, newForm]);
  };

  const HandleProjectsFormChange = (index: any, field: any, value: any) => {
    const updatedFormData: any = [...projectsFormData];
    updatedFormData[index][field] = value;
    setProjectsFormData(updatedFormData);
  };

  const ExperiencesAddForm = () => {
    const newForm = {
      Positionon: '',
      Companyon: '',
      Summaryon: '',
      ExperiencesStart: '',
      ExperiencesEnd: '',
    };
    setExperiencesFormData([...experiencesFormData, newForm]);
  };

  const HandleExperiencesFormChange = (index: any, field: any, value: any) => {
    const updatedFormData: any = [...experiencesFormData];
    updatedFormData[index][field] = value;
    setExperiencesFormData(updatedFormData);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'#E0EDF6'} barStyle={'dark-content'} />
      {imageGallery === null ? (
        <TouchableOpacity onPress={openGallery} style={styles.imagecontainer}>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.imagecontainer}>
          <Image source={{uri: imageGallery.uri}} style={styles.image} />
        </View>
      )}
      <Formik initialValues={initialFormValues} onSubmit={generatePdf}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <İnputBox
              title="About Yourself"
              onPress={() =>
                aboutModalVisible
                  ? setAboutModalVisible(false)
                  : setAboutModalVisible(true)
              }
              ModalVisible={aboutModalVisible}
              Modalİtem={
                <View>
                  <İnput
                    TextName="Name & Surname"
                    placeholder="Your name"
                    onChangeText={handleChange('NameSurname')}
                    value={values.NameSurname}
                  />
                  <İnput
                    TextName="Job"
                    placeholder="What is your job?"
                    onChangeText={handleChange('Job')}
                    value={values.Job}
                  />
                  <İnput
                    TextName="Location"
                    placeholder="Where do you live?"
                    onChangeText={handleChange('Location')}
                    value={values.Location}
                  />
                  <İnput
                    TextName="About"
                    placeholder="A few sentences about yourself"
                    multiline={true}
                    onChangeText={handleChange('About')}
                    value={values.About}
                  />
                  <View style={styles.listcontainer}>
                    {LinkData.map((e, index) => {
                      const [tick, settick] = useState<boolean>(false);

                      const HandleMalzeme = (value: string) => {
                        if (tick === true) {
                          settick(false);
                          setInputLink(oldValues => {
                            return oldValues.filter(fruit => fruit !== value);
                          });
                        } else {
                          settick(true);
                          setInputLink([...InputLink, value]);
                        }
                      };
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => HandleMalzeme(e.value)}>
                          <View style={styles.listinnercontainer}>
                            <View
                              style={[
                                styles.listimleç,
                                tick
                                  ? {
                                      //borderColor: '#32cd32',
                                      backgroundColor: '#4285F6',
                                      borderColor: '#4285F6',
                                    }
                                  : {
                                      borderColor: '#12BC84',
                                      //backgroundColor: '#000',
                                    },
                              ]}></View>
                            <Text style={styles.listtitle}>{e.title}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  {InputLink.map((e, index) => {
                    return (
                      <İnput
                        key={index}
                        TextName={e}
                        placeholder="Only Username"
                        onChangeText={handleChange(e)}
                        //value={values.e}
                      />
                    );
                  })}
                </View>
              }
            />
            <İnputBox
              title="Skills"
              onPress={() =>
                skillsModalVisible
                  ? setSkillsModalVisible(false)
                  : setSkillsModalVisible(true)
              }
              ModalVisible={skillsModalVisible}
              Modalİtem={
                <View>
                  <İnput
                    TextName="Tools and Tech Skills"
                    placeholder="Tools and Tech Skills"
                    onChangeText={setToolsSkillsText}
                  />
                  <View
                    style={[
                      styles.skillslistcontainer,
                      {backgroundColor: '#EFF6FF'},
                    ]}>
                    {toolsSkills.map((e, index) => {
                      return (
                        <Skills
                          key={index}
                          title={e}
                          containerColor="#CEE4FE"
                          titleColor="#2E4D96"
                          iconColor="#63A7FA"
                        />
                      );
                    })}
                  </View>
                  <PlusButton
                    addPress={() =>
                      setToolsSkills([...toolsSkills, toolsSkillsText])
                    }
                    title="Add"
                    backgroundColor="#CEE4FE"
                    titleColor="#2E4D96"
                    borderColor="#63A7FA"
                  />

                  <İnput
                    TextName="Industry Knowledge"
                    placeholder="What is your job?"
                    onChangeText={setIndustryKnowledgeText}
                  />
                  <View
                    style={[
                      styles.skillslistcontainer,
                      {backgroundColor: '#F6F3FF'},
                    ]}>
                    {industryKnowledge.map((e, index) => {
                      return (
                        <Skills
                          key={index}
                          title={e}
                          containerColor="#E5DFFE"
                          titleColor="#552099"
                          iconColor="#AA8DFA"
                        />
                      );
                    })}
                  </View>
                  <PlusButton
                    addPress={() =>
                      setIndustryKnowledge([
                        ...industryKnowledge,
                        industryKnowledgeText,
                      ])
                    }
                    title="Add"
                    backgroundColor="#E5DFFE"
                    titleColor="#552099"
                    borderColor="#AA8DFA"
                  />

                  <İnput
                    TextName="Languages"
                    placeholder="Where do you live?"
                    onChangeText={setLanguagesText}
                  />
                  <View
                    style={[
                      styles.skillslistcontainer,
                      {backgroundColor: '#FFF2F2'},
                    ]}>
                    {languages.map((e, index) => {
                      return (
                        <Skills
                          key={index}
                          title={e}
                          containerColor="#FED9DD"
                          titleColor="#8C153C"
                          iconColor="#FB7487"
                        />
                      );
                    })}
                  </View>
                  <PlusButton
                    addPress={() => setLanguages([...languages, languagesText])}
                    title="Add"
                    backgroundColor="#FED9DD"
                    titleColor="#8C153C"
                    borderColor="#FB7487"
                  />
                </View>
              }
            />
            <İnputBox
              title="Educations"
              onPress={() =>
                educationsModalVisible
                  ? setEducationsModalVisible(false)
                  : setEducationsModalVisible(true)
              }
              ModalVisible={educationsModalVisible}
              Modalİtem={
                <View>
                  {educationsFormData.map((form, index) => (
                    <EducationsBox
                      key={index}
                      studyonChangeText={(text: any) =>
                        HandleEducationsFormChange(index, 'studyon', text)
                      }
                      studyvalue={form.studyon}
                      SchoolonChangeText={(text: any) =>
                        HandleEducationsFormChange(index, 'school', text)
                      }
                      Schoolvalue={form.school}
                      StartonChangeText={(text: any) =>
                        HandleEducationsFormChange(
                          index,
                          'educationsStart',
                          text,
                        )
                      }
                      Startvalue={form.educationsStart}
                      EndonChangeText={(text: any) =>
                        HandleEducationsFormChange(index, 'educationsEnd', text)
                      }
                      Endvalue={form.educationsEnd}
                    />
                  ))}
                  <PlusButton plus={true} plusPress={EducationsAddForm} />
                </View>
              }
            />
            <İnputBox
              title="Projects"
              onPress={() =>
                projectsModalVisible
                  ? setProjectsModalVisible(false)
                  : setProjectsModalVisible(true)
              }
              ModalVisible={projectsModalVisible}
              Modalİtem={
                <View>
                  {projectsFormData.map((form, index) => (
                    <ProjectsBox
                      key={index}
                      ProjectTitleonChangeText={(text: any) =>
                        HandleProjectsFormChange(index, 'ProjectTitl', text)
                      }
                      ProjectTitlevalue={form.ProjectTitl}
                      ProjectLinkonChangeText={(text: any) =>
                        HandleProjectsFormChange(index, 'ProjectLink', text)
                      }
                      ProjectLinkvalue={form.ProjectLink}
                      ProjectSummaryonChangeText={(text: any) =>
                        HandleProjectsFormChange(
                          index,
                          'ProjectSummaryon',
                          text,
                        )
                      }
                      ProjectSummaryvalue={form.ProjectSummaryon}
                    />
                  ))}
                  <PlusButton plus={true} plusPress={ProjectsAddForm} />
                </View>
              }
            />
            <İnputBox
              title="Experiences"
              onPress={() =>
                experiencesModalVisible
                  ? setExperiencesModalVisible(false)
                  : setExperiencesModalVisible(true)
              }
              ModalVisible={experiencesModalVisible}
              Modalİtem={
                <View>
                  {experiencesFormData.map((form, index) => (
                    <ExperiencesBox
                      key={index}
                      PositiononChangeText={(text: any) =>
                        HandleExperiencesFormChange(index, 'Positionon', text)
                      }
                      Positionvalue={form.Positionon}
                      CompanyonChangeText={(text: any) =>
                        HandleExperiencesFormChange(index, 'Companyon', text)
                      }
                      Companyvalue={form.Companyon}
                      SummaryonChangeText={(text: any) =>
                        HandleExperiencesFormChange(index, 'Summaryon', text)
                      }
                      Summaryvalue={form.Summaryon}
                      StartdateonChangeText={(text: any) =>
                        HandleExperiencesFormChange(
                          index,
                          'ExperiencesStart',
                          text,
                        )
                      }
                      Startdatevalue={form.ExperiencesStart}
                      EnddateonChangeText={(text: any) =>
                        HandleExperiencesFormChange(
                          index,
                          'ExperiencesEnd',
                          text,
                        )
                      }
                      Enddatevalue={form.ExperiencesEnd}
                    />
                  ))}
                  <PlusButton plus={true} plusPress={ExperiencesAddForm} />
                </View>
              }
            />
            <View style={styles.templatscontainer}>
              {TemplatsData.map((e, index) => {
                return (
                  <TemplatBox
                    key={index}
                    source={e.image}
                    onPress={() => setStatus(e.value)}
                    status={status}
                    statusiki={e.value}
                  />
                );
              })}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.download}>
              <FontAwesome5
                name="cloud-download-alt"
                size={35}
                color={'#fff'}
              />
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0EDF6',
    ...Platform.select({
      ios: {
        paddingTop: 50,
      },
    }),
  },
  imagecontainer: {
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 60,
    marginTop: 15,
    marginBottom: 10,
  },
  listcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  listinnercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal: 10,
  },
  listimleç: {
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 8,
    marginHorizontal: 3,
  },
  listtitle: {
    //fontSize: 17,
    //color: '#fff'
  },
  skillslistcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 3,
    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D2D8DD',
  },
  download: {
    backgroundColor: '#4086F6',
    alignSelf: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  templatscontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
});

const TemplatsData = [
  {
    title: 'TemplatsBir',
    value: 'TemplatsBir',
    image: require('./CvTemplatsBir.png'),
  },
  {
    title: 'Templatsİki',
    value: 'Templatsİki',
    image: require('./CvTemplatsİki.png'),
  },
  {
    title: 'TemplatsÜç',
    value: 'TemplatsÜç',
    image: require('./CvTemplatsÜç.png'),
  },
];
