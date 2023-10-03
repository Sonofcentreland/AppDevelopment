import PropTypes from 'prop-types';

const RecipeBox = ({name, image, title, ingredients, genre, instructions, tips, value, author}) => {
     return (
          <div className={name}>
               { image && 
                    <div className="image" onClick={onClick}>
                         <img src={image} alt=''/>
                    </div> 
               }
               { title  && <div className="text">  { text  } </div> }
          </div>
        );
}

const LinkBox = ({ name, text, icon, onClick }) => {
     const linkBox = {
          cursor: "pointer",
     }
  return (
    <div className={name} onClick={onClick} style={linkBox}>
          { icon && <div className="icon">   { icon  } </div> }
          { text  && <div className="text">  { text  } </div> }
    </div>
  );
};

const TextBox = ({ name, icon, title, text }) => {

     const textBox = {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
     }

     return (
          <div className={name} style={textBox}>
               { icon  &&  <div className="icon">  {  icon } </div> }
               { title &&  <div className="title"> { title } </div> }
               { text  &&  <div className="text">  { text  } </div> }
          </div>
     );
};

const ButtonBox = ({ name, text, onClick}) => {

     const buttonBox = {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          border: 'none',
          font: 'inherit',
          color: 'inherit',
          background: 'none',
          cursor: 'pointer',
          outline: 'none',
     }

     return (
          <div className={name} onClick={onClick}>
               <button style={buttonBox} >{ text }</button>
               {/* { icon && <div className="title"> { icon } </div> } */}
          </div>
     );
};

LinkBox.propTypes = {
     name: PropTypes.string.isRequired,
     text: PropTypes.string.isRequired,
     onClick: PropTypes.func,
};

export {
     LinkBox,
     TextBox,
     ButtonBox,
};
