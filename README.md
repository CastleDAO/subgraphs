# CastleDAO subgraphs

CastleDAO subgraphs are a collection of data indexers used to build the CastleDAO game.
Each collection here is included in the battle system. If you want to add an integration to CastleDAO, make sure to provide a graph.
Each graph has to be able to return the onchain data for a relative collection and it's tokenURI.

## Hosted versions:

- Defiheroes: https://thegraph.com/hosted-service/subgraph/rafinskipg/defi-heroes-v0
- Castles Arbitrum: https://thegraph.com/hosted-service/subgraph/rafinskipg/castles-arbitrum-v0
- Castles Ethereum: https://thegraph.com/hosted-service/subgraph/rafinskipg/castledao-castles-ethereum-v0
- Generals: https://thegraph.com/hosted-service/subgraph/rafinskipg/generals-v0

## Developing a new CastleDAO subgraph

_Most of the documentation can be found on [The Graph Website](https://thegraph.com/docs/en/developing/creating-a-subgraph/)._

- Install the graph globally `yarn global add @graphprotocol/graph-cli`
- Initialize a new subgraph from an existing one: ` graph init --studio castles-arbitrum-v0`
- Choose the option `ethereum` and name your subgraph following the pattern PROJECTNAME-NETWORK-VERSION. For example `arbidudes-arbitrum-v0`
- Select the directory by default, the right network, contract address and remaining data.

Once you completed the creation and installation, is time to:

- Edit your schema.graphql to add your entities. (Run `graph codegen` after each edition of the schema to allow the graph to detect the new types)
- Edit the main file under `src` to add the logic to read your NFTs.

## Deploying the graphs

All the information available here: https://thegraph.com/docs/en/deploying/subgraph-studio/

```
npx graph auth --product hosted-service CODE
npx graph deploy --product hosted-service [USER]/[GRAPH]
```

## Adding a new subgraph

```
npx graph init --product subgraph-studio --network arbitrum-one --from-contract 0X0000
```

To add a new contract to an existing subgraph:

```
npx graph add 0x000  --contract-name ContractName
```
