function LinkButton(props) {
  const buttonLinkClasses = props.small
    ? "button-link button-small"
    : "button-link";
  return (
    <a
      href={props.streamingServiceLink && props.streamingServiceLink}
      target="_blank"
    >
      <div className="button-link-container">
        <div className={buttonLinkClasses}>
          <img
            className="spotify"
            src={props.streamingServiceLogo}
            alt="spotify"
          />
          <p>{props.streamingService}</p>
          <img className="arrow-fwd" src="/img/arrow-fwd.png" alt="arrow-fwd" />
        </div>

        <style jsx>{`
          .button-link-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button-link {
            border-radius: 1rem;
            font-family: taki;
            color: white;
            background-color: black;
            border: none;
            outline: none;
            width: 10rem;
            height: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            cursor: pointer;
            font-size: 0.5rem;
            border: 1px solid white;
          }

          .spotify {
            padding: 0.3rem;
            height: 1rem;
            width: auto;
          }
          .arrow-fwd {
            padding: 0.3rem;
            height: 1.5rem;
            width: auto;
          }
          @media (min-width: 801px) {
            .button-link {
              border-radius: 1.5rem;
              width: 17rem;
              height: 3rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1rem;
              cursor: pointer;
              font-size: 0.9rem;
            }
            .spotify {
              padding: 0.5rem;
              height: 1.5rem;
            }

            .arrow-fwd {
              padding: 0.5rem;
            }
          }
          .button-small {
            width: 9rem;
            height: 2rem;
            font-size: 0.55rem;
          }
        `}</style>
      </div>
    </a>
  );
}

export default LinkButton;
