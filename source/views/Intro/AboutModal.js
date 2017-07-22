import React from "react";
import { Text } from "react-native";
import Prompt from "react-native-prompt";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

import theme from "../../theme";
import styles from "./styles";

import { subscribe } from "../../services/mailchimp";

export default class AboutModal extends React.Component {
  state = {
    promptVisible: false,
    promptState: ""
  };

  togglePrompt = () =>
    this.setState({ promptVisible: !this.state.promptVisible });

  mail = async email => {
    const subscribed = await subscribe(email);
    if (subscribed) {
      this.setState({
        promptState: "success"
      });

      setTimeout(() => {
        this.setState({
          promptVisible: false
        });
      }, 1000);
    } else {
      this.setState({
        promptState: "error"
      });
    }
  };

  render() {
    const { infoModalVisible, mail, toggleModal } = this.props;
    const { promptState, promptVisible } = this.state;

    const promptStyles = {
      ...theme.components.prompt,
      dialogBodyStyle: {
        ...theme.components.prompt.dialogBody,
        ...theme.components.dynamicDialog(promptState)
      }
    };

    return (
      <Modal
        title="About The App"
        toggle={toggleModal}
        visible={infoModalVisible}
      >
        <Prompt
          title="ENTER YOUR EMAIL"
          placeholder="truthseeker@..."
          visible={promptVisible}
          onCancel={this.togglePrompt}
          onSubmit={value => this.mail(value)}
          {...promptStyles}
        />

        <Text style={styles.modalBodyText}>
          This is the beginning of the new Sirius Contact Project.
        </Text>
        <Text style={styles.modalBodyText}>
          If you wish to provide feedback, contribute or provide funding for
          further features...
        </Text>
        <Button
          style={{
            paddingVertical: 12,
            backgroundColor: theme.colors.lightBlue,
            borderWidth: 4,
            marginBottom: 16
          }}
          onPress={this.togglePrompt}
        >
          <Text
            style={[
              styles.bodyText,
              styles.buttonText,
              {
                fontSize: 24,
                textAlign: "center",
                fontFamily: "bold"
              }
            ]}
          >
            MAKE CONTACT
          </Text>
        </Button>
        <Text style={styles.modalBodyText}>Thank you,</Text>
        <Text style={styles.modalBodyText}>
          Your Sirius Disclosure Dev Team
        </Text>
      </Modal>
    );
  }
}
