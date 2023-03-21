# dd-trace-reprod

This repo is for reproducing an issue in dd-trace where using v13.15.0 in combination with NextJS >=v13.2 causes the plugin `request` hook to no longer be called

## Steps to reproduce

### Before NextJS v13.2

The request hook is called as expected

```bash
git clone git@github.com:tamarasaurus/dd-trace-reprod.git
cd before-132 && yarn && yarn dev
# open localhost:3000 in browser
# confirm that in the terminal you can see the log "request hook called"
```

### After NextJS v13.2

The request hook is no longer called

```bash
git clone git@github.com:tamarasaurus/dd-trace-reprod.git
cd after-132 && yarn && yarn dev
# open localhost:3000 in browser
# confirm that in the terminal you no longer see any log from the request hook
```