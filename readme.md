<center> <img src="ZalgremLogo.gif" display="block" height="200"> </center>
<br>

# Zalgrem
Zalgrem is a Zalgo Remover tool that filters and checks zalgo characters.

# What are Zalgo Characters?
Zalgo text is made up of glitchy letters like this: <br><br>H̷̬̥͂̀̂͘͘e̶̛͓̺̰̻͂͛́͝ľ̶̲̤̗̹̟̲̄̾̈́̿l̶̨̝͈̻͉̏̈́̽͊̚͜ò̶̭̳̈́̎,̶̧̻̝͓̿͋̈͜ ̶̥͓̮̆͋̑̎Ẁ̸͚̭͕̺̰͚̽̃́o̸͙̰̙̦͕̐r̸̖͒͜l̵̛͙͉͇̦̾͐͘d̸͓͍͔͉̠͜͝ <br><br> It's made up of many unicode diacritic marks the marks on top of words in languages like French and Spanish. Some English words like "cliché" have diacritics (above the "e") because they're inherited from other languages. 

## Commands
 |               Commands              | Description | 
 |-------------------------------------|-------------|
 |`--get-error <value>`                | Grabs error codes when the value contains a dash `-`. But when it is `list`, it will get the list of all error codes and their descriptions| 
 |`--filter <target string>`           | Filters out the characters that arent in the "allowed characters" list or in the whitelist |
 |`--check <target string>          `  | Checks if there are any characters that are NOT in the allowed Characters list or in the whitelist
 | `--config <handle> <value>`      | Configuration command. Handles are `whitelist` and `action`|
 | `--help`                            | Gets the list of commands that are available for use |


## whitelist
The whitelist can be reached using `--config whitelist`.

|               whitelist config              |                                          Description                                         |
|---------------------------------------------|----------------------------------------------------------------------------------------------|
| `--config whitelist add`                    | Adds the listed characters (separated by space (`" "`))                                      |
| `--config whitelist remove`                 | removes the listed characters (separated by space (`" "`))                                   |
| `--config whitelist list`                   | Lists all the charactrers defined in the whitelist                                           |
| `--config whitelist import <path>`          | Imports/Overrwrites the whitelist characters into the whitelist. Default import and its path is `./exports/blank.save.json`                                                                                                                                   | 
| `--config whitelist export <path>`          | Saves/Exports the current state of the whitelist and its `on/off` state. Default export is `./exports/blank.save.json`                                                                                                                                        |
| `--config whitelist toggle [<true/false>?]` | Toggles the whitelist to be on or off. Defining the state with `true` or `false` is optional | 