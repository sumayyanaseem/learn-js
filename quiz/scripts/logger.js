// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    if (this && this.errMsg) {
        console.error(this.errMsg);
    } else {
        console.error("Error message not found in the provided object");
    }
}

// Example usage:
const errorObject = { errMsg: "This is an error message." };
logMsg.call(errorObject);

const anotherObject = { message: "This object does not have errMsg." };
logMsg.call(anotherObject);
