import React from 'react'
import './template_1.css';
import BlockContent from './BlockContent';
import ProgressBar from './ProgressBar';
const Template1 = () => {
  return (
    <div className='container' >
          {/* Header */}
        <div className='header'>
          <div className='name'>
              KARTHICK R
            </div>
            <div className='position'>
              <p>SOFTWARE DEVELOPER</p>
            </div>
            <div className='contacts'>
                <div className='location'>
                      <div className='icon'>

                      </div>
                      <div className='address'>
                           45A, Gengadevan Kuppam, 603304
                      </div>
                </div>
                <div className='phone'>
                      <div className='icon'>

                      </div>
                      <div className='phone_numer'>
                            9092022404
                      </div>
                </div>
                <div className='email'>
                      <div className='icon'>

                      </div>
                      <div className='email_id'>
                            wikimerky@gmail.com
                      </div>
                </div>
            </div>
        </div>
      
     {/* Body */}
      <div className='main-content'>
            <div className='left-content'>
                  <img className='photo'></img>
                  <h4 className='top-bottom-border'>EDUCATION</h4>


                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />

                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />

                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />

                  <h4 className='top-bottom-border'>LANGUAGE</h4>
                  <div className='progress-cards'>
                  <ProgressBar percent='60' title='Engish'/>  
                  <ProgressBar percent='40' title='Tamil'/>  
                  <ProgressBar percent='50' title='Telugu'/>  
                  </div>
            </div>
            <div className='right-content'>
                  <p>jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdkjkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk

                  jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk
                  </p>
                  <p>jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk</p>
            
                  <h4 className='top-bottom-border'>WORK EXPERIENCE</h4>
                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                   <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                   <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                  <BlockContent  
                  title='HIGH SCHOOL DIPLOMA' 
                  institute = 'College of Arts / London /2022'
                  desc='jkfjalkfjlkafdja;lkfj kfj lkfjlkaj lkfj;lk jfk jlkjfkdjslkfjsalk jkfjlk jlkfjalkffkjsadlkfjsalkdj lkjlk jfkaj lkjfkdjfk awjfdk'
                  />
                  
                  <h4 className='top-bottom-border'>SKILLS</h4>
                  <div className='progress-cards'>
                  <ProgressBar percent='60' title='HTML'/>  
                  <ProgressBar percent='40' title='CSS'/>  
                  <ProgressBar percent='50' title='JAVASCRIPT'/>  
                  <ProgressBar percent='80' title='BOOTSTRAP'/>  
                  </div>
            </div>

      </div>
     
        
    </div>
  )
}

export default Template1