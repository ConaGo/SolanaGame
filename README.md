Fight for power in this ever expanding post apocalyptic universe

## Stack

- Frontend in React
- Godot Game Engine
- Web3 Solana Cli wrapper
- Smart contracts in Rust  https://github.com/ConaGo/SolanaEscrow
- Backed in Elixir/Phoenix https://github.com/ConaGo/phoenixBackendSolanaGame

# Setup

## Godot linux

1. [download latest godot version for linux](https://godotengine.org/download/linux)
2. Extract to desktop
3. rename file to godot
4. open terminal on desktop
5. \$ sudo mv ./godot usr/local/bin
6. open terminal in godot project
7. \$ godot -e
8. install HTML5 template

## Webapp

```
yarn
```

## solana blockchain

install the solana cli

```
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

# Development

## Starting the webapp for development

```
//start local solana cluster
solana-test-validator
//start webapp
yarn start
```

## Developing the godot game

To export the godot game to web either run

```
yarn run export
```

or

1. Export with html5 template
2. Replace the game.wasm and game.pck files in the public folder
