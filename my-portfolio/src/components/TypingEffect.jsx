import Typewriter from 'typewriter-effect';

{/* Javascript implementation to acheive typing effect */}
const TypewriterComponent = () => {
    return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Khairat Adesina')
              .pauseFor(1000)
              .deleteAll()
              .typeString('')
              .pauseFor(1000)
              .start();
          }}
          options={{
            loop: true,
            cursor: '_',
          }}
        />
      );
};

export default TypewriterComponent;
