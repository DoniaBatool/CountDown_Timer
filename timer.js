import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.bgMagentaBright.bold.yellowBright("THE COUNT DOWN BEGINS......"));
const answer = await inquirer.prompt({
    name: "givenSeconds",
    type: "number",
    message: "Please Enter The Time In Seconds: ",
    validate: (input) => {
        if (input = NaN && input > 60) {
            return "Please Enter number less than or equal to 60";
        }
        else {
            return true;
        }
    }
});
function timer(myTime) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + myTime);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const now = new Date();
        const timeDiff = differenceInSeconds(intervalTime, now);
        if (timeDiff < 0) {
            console.log("The Timer Has Expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const second = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`);
    }, 1000);
}
timer(answer.givenSeconds);
