# alexa-teatimer :tea:
*Alexa, start tea timer*

Amazon Echo will inform you when your tea is ready!

![Tea](./assets/tea_small.jpg)

## Lambda functions (node 6.10)
- Run `make lambda` to generate zip archive with javascript code
- Upload **alexa-tea-timer.zip** as lambda function in your AWS console.

## Alexa Skill
Files are stored in the *speechAssets* folder

## To do
- Allow to decide on different tea types: fruit (8m)
- Instead of ssml <break /> use echo's internal timer. [Is it even possible?](https://stackoverflow.com/questions/41349022/set-a-reminder-timer-on-an-alexa-custom-skill)
