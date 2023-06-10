import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

function AlertMessage(props) {
  return (
    <>
      <Alert status="error" display={props.display}>
        <AlertIcon />

        <AlertTitle>Your browser is outdated!</AlertTitle>
      </Alert>
    </>
  );
}

export default AlertMessage;
