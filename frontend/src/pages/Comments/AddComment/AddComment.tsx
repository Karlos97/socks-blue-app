import { useState } from "react";
import Button from "src/atoms/Button/Button";
import FormRow from "src/atoms/FormRow/FormRow";
import Input from "src/atoms/Input/Input";
import Text from "src/atoms/Text/Text";
import Wrapper from "src/atoms/Wrapper/Wrapper";
import { backendPath } from "src/config";
import { useErrors } from "src/helpers/useErrors";
import classes from "./addComment.module.scss";

interface ErrorProps {
  data: { message: string }[];
  message: string;
  status: number;
}

const AddComment = ({ fetchPage }: { fetchPage: () => void }) => {
  const {
    errors: nameErrors,
    setErrorsArray: setNamesErrors,
    clearErrors: clearNamesErrors,
  } = useErrors([]);
  const {
    errors: emailErrors,
    setErrorsArray: setEmailErrors,
    clearErrors: clearEmailErrors,
  } = useErrors([]);
  const {
    errors: messageErrors,
    setErrorsArray: setMessageErrors,
    clearErrors: clearMessageErrors,
  } = useErrors([]);
  const {
    errors: communicationErrors,
    setErrorsArray: setCommunicationErrors,
    clearErrors: clearCommunicationErrors,
  } = useErrors([]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSubmitHandler = () => {
    clearNamesErrors();
    clearEmailErrors();
    clearMessageErrors();
    clearCommunicationErrors();

    if (!name) {
      setNamesErrors(["Invalid name!"]);
    }
    if (!email || !email.includes("@")) {
      setEmailErrors(["Invalid email!"]);
    }
    if (!message) {
      setMessageErrors(["Invalid message!"]);
    }
    if (!name || !email || !message || !email.includes("@")) return;

    const graphqlQuery = {
      query: `
          mutation CreateNewComment($name: String!, $email: String!, $message: String!) {
            createComment(commentInput:{
              name: $name,
              email: $email,
              message: $message
            }){
              name
              email
              message
              createdAt
            }
          }`,
      variables: {
        name,
        email,
        message,
      },
    };
    return fetch(backendPath, {
      method: "POST",
      body: JSON.stringify(graphqlQuery),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.errors?.length) {
          data.errors.map((error: ErrorProps) =>
            setCommunicationErrors([
              ...communicationErrors,
              error.data?.[0].message,
            ])
          );
        } else {
          setName("");
          setEmail("");
          setMessage("");
          fetchPage();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes["add-comment"]}>
      <Text weight="bold" size="small" className={classes["header"]}>
        Add comment
      </Text>
      <FormRow errorMsg={communicationErrors}>
        <Wrapper direction="column">
          <Wrapper>
            <FormRow errorMsg={nameErrors}>
              <Wrapper>
                <Input
                  err={!!nameErrors.length}
                  placeholder="Your Name"
                  value={name}
                  type="text"
                  onChange={(value: string) => setName(value.trim())}
                />
              </Wrapper>
            </FormRow>
            <FormRow errorMsg={emailErrors}>
              <Wrapper>
                <Input
                  err={!!emailErrors.length}
                  placeholder="Your Email"
                  value={email}
                  type="text"
                  onChange={(value: string) => setEmail(value.trim())}
                />
              </Wrapper>
            </FormRow>
          </Wrapper>
          <FormRow errorMsg={messageErrors}>
            <Wrapper>
              <Input
                err={!!messageErrors.length}
                variant="textarea"
                placeholder="Your Messages"
                value={message}
                type="text"
                onChange={(value: string) => setMessage(value.trim())}
              />
            </Wrapper>
          </FormRow>

          <Wrapper direction="column" disableColSpan className={classes.footer}>
            <Button variant="blue" onClick={onSubmitHandler}>
              <Text weight="bold">Send</Text>
            </Button>
          </Wrapper>
        </Wrapper>
      </FormRow>
    </div>
  );
};

export default AddComment;
