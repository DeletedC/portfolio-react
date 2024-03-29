import svgPicker from '../pages/api/svgPicker';
import ButtonLinks from './ButtonLinks';
// import Image from 'next/image';

const ProjectDiv = (props) => {

  // To hold the extra Tailwind utilities and save on typing
  const params = 'p-0';
  
  return (
    <div className={`flex flex-col items-center min-w-full py-12 pb-24 ${props.color}`}>

      {/* 
      ////////////////////////////
      DESKTOP CONTAINER 
      ///////////////////////////
      */}
      <div className={`hidden md:flex ${props.direction || 'flex-row'} px-12`}>
        
        {/* Project Name and Description */}
        <div className={`flex flex-col w-2/4 ${props.direction? 'items-end': 'items-start'}`}>
            <h1 className='pb-4'>{props.name}</h1>
            <p className='text-xl pb-2'>Built With:</p>

            {/* DevIcons will go here */}
            <div className={`inline-flex flex-nowrap space-x-2 w-100 ${props.direction? 'justify-end': 'justify-start'}`}>
            {props.tech.map((item) => {
                return <div key={item} className='bg-blue-100 bg-opacity-10 rounded w-16 h-16 p-2 transform hover:scale-110'>{svgPicker(item, params)}</div>
            })} 
            </div>

          {/* Project Description */}
          <div className={`flex flex-col ${props.direction? 'justify-end pl-20': 'justify-start pr-20'} text-2xl leading-relaxed py-12 space-y-4`}>
            {props.children}
          </div>
          
          {/* LINKS GO HERE */}
          <ButtonLinks data={props.links} />

        </div>

        {/* Project Images */}
        <img className='object-contain w-2/4 rounded-2xl' src={props.image} alt={`${props.name} Screenshot`}/>
        {/* <div className="relative w-2/4 justify-center">
          <Image src={props.image} alt={`${props.name} Screenshot`} layout="fill" className="object-scale-down"/>
        </div> */}
        
        

      </div>

      

      {/* 
      ////////////////////////////
      MOBILE CONTAINER 
      ///////////////////////////
      */}
      <div className='md:hidden'>
        {/* Project Name and Description */}
        <div className=''>
          <h1 className='pb-4 text-center text-3xl'>{props.name}</h1>

          {/* Project Images */}
          <img className='object-contain' src={props.image} alt={`${props.name} Screenshot`}/>
          {/* <div className="relative">
            <Image src={props.image} alt={`${props.name} Screenshot`} layout="responsive" className="object-fit"/>
          </div> */}
          
          {/* DevIcons will go here */}
          <div className={`flex justify-center py-8 space-x-2`}>
          {props.tech.map((item) => {
              return <div key={item} className='bg-black bg-opacity-10 rounded w-16 h-16'>{svgPicker(item, 'p-1')}</div>;
          })} 
          </div>

          {/* Project Description */}
          <div className={`text-xl leading-relaxed py-4 px-6 pb-12 space-y-4`}>
            {props.children}
          </div>

          {/* LINKS GO HERE */}
          <ButtonLinks data={props.links} />
        </div>


      </div>
    </div>
  );
}

export default ProjectDiv;