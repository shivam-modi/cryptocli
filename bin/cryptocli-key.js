import {program} from "commander"
import key from "../commands/key.js";

program
  .command("set")
  .description("Set API key -- Get at https://nomics.com")
  .action(key.set);

program
  .command("show")
  .description("Set API key")
  .action(key.show);
  
program
  .command("remove")
  .description("Remove API key")
  .action(key.remove);  

program.parse(process.argv)       

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}