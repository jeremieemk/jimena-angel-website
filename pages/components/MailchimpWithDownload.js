import React from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";

class MailchimpWithDownload extends React.Component {
  state = {};
  fields = [
    {
      name: "FNAME",
      placeholder: "Your Name",
      type: "text",
      required: false,
    },
    {
      name: "EMAIL",
      placeholder: "Your Email",
      type: "email",
      required: true,
    },
  ];

  handleSubmit(evt) {
    evt.preventDefault();
    const { action } = this.props;
    const values = this.fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state["EMAIL"];
    !regex.test(email)
      ? this.setState({ status: "empty" })
      : this.sendData(url);
  }

  sendData(url) {
    this.setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      console.log(data.msg)
      if (data.msg.includes("already subscribed")) {
        // change status to "duplicate" to prevent re-subscribing
        
        this.setState({ status: "success" });
        this.props.fireDownload();
      } else if (err) {
        this.setState({ status: "error" });
      } else if (data.result !== "success") {
        this.setState({ status: "error" });
      } else {
        this.setState({ status: "success" });
        this.props.fireDownload();
      }
    });
  }

  render() {
    const { styles, className, buttonClassName } = this.props;
    const messages = {
      ...MailchimpWithDownload.defaultProps.messages,
      ...this.props.messages,
    };
    const { status } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={className}>
        {this.fields.map((input) => (
          <input
            {...input}
            key={input.name}
            onChange={({ target }) =>
              this.setState({ [input.name]: target.value })
            }
            defaultValue={this.state[input.name]}
          />
        ))}
        <button
          disabled={status === "sending" || status === "success"}
          type="submit"
          className={buttonClassName}
        >
          {messages.button}
        </button>
        <div className="msg-alert">
          {status === "sending" && (
            <p style={styles.sendingMsg}>{messages.sending}</p>
          )}
          {status === "success" && (
            <p style={styles.successMsg}>{messages.success}</p>
          )}
          {status === "duplicate" && (
            <p style={styles.duplicateMsg}>{messages.duplicate}</p>
          )}
          {status === "empty" && (
            <p style={styles.errorMsg}>{messages.empty}</p>
          )}
          {status === "error" && (
            <p style={styles.errorMsg}>{messages.error}</p>
          )}
        </div>
      </form>
    );
  }
}

MailchimpWithDownload.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe to download!",
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD",
    },
    successMsg: {
      color: "#009432",
    },
    duplicateMsg: {
      color: "#EE5A24",
    },
    errorMsg: {
      color: "#ED4C67",
    },
  },
};

MailchimpWithDownload.propTypes = {
  onSignedUp: PropTypes.func,
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default MailchimpWithDownload;
