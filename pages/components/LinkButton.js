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
          .spotify {
            padding: 0.3rem;
            height: 1rem;
            width: auto;
          }
          @media (min-width: 801px) {
            .spotify {
              padding: 0.5rem;
              height: 1.5rem;
            }
          }
        `}</style>
      </div>
    </a>
  );
}

export default LinkButton;
