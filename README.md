forked from <https://github.com/lqqyt2423/node-socks5-server>

# bind-socks5-server

This is a SOCKS5 proxy server intended to bind to a specific local network adapter to direct network traffic, useful when used with a VPN.

## Usage instructions

### Install globally

```sh
npm i -g @invition/bind-socks5-server
```

### Startup

```sh
bind-socks5
```

Then using arrow key to choose network adapter you want to route traffic through. Proxy server will listen to port 1080.

### Configure your browser

To route specific websites or all traffic through the proxy, it is recommended to use [Proxy SwitchyOmega](https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif). This tool allows for easy switching between different proxy profiles.

## Thanks

- [socks](https://zh.wikipedia.org/wiki/SOCKS)
- [rfc1928](https://tools.ietf.org/html/rfc1928)
- [rfc1929](https://tools.ietf.org/html/rfc1929)
- [go-socks](https://github.com/armon/go-socks5)
- [node-socks5-server](https://github.com/lqqyt2423/node-socks5-server)
