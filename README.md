# pcs.berkeley.edu website


PCS@Berkeley official website

Link: [pcs.berkeley.edu](https://pcs.berkeley.edu)
<br />

### Development

To begin, first run `npm install` to install the necessary npm modules

Run `npm start` to start a webserver instance at `localhost:3000`

Run `npm run-script build` to create a production build from the files in \src

To move files onto OCF host:
  1) Copy over the build folder to the OCF server (vampire) using scp
  2) SSH into the same server, find the folder you just copied over, and copy it into public_html,
  the format of the command should look something like: `cp -a  path/to/build folder/. public_html`

### Special Thanks

We would like to acknowledge that much of this webpage has been inspired by the
open-source code provided for the Brooklyn College Computer Science Club's website and
extend thanks to them.

We would also like to give a special thanks to OCF Berkeley for hosting our webpage.
