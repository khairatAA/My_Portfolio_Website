import Typewriter from 'typewriter-effect';

{/* Javascript implementation to acheive typing effect */}
const TypewriterComponent = () => {
    return (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("I'm a Software Engineer")
              .pauseFor(1000)
              .deleteChars(17)
              .typeString('Frontend Engineer')
              .pauseFor(1000)
              .deleteChars(17)
              .typeString('Web Developer')
              .pauseFor(1000)
              .deleteAll()
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
