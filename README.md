# Much great, very builder, wow
<img src="./greatlogo.jpg" alt="great-builder"/>

## The no abstraction frontend lib. <br>
<b> Building with blocks </b>




## Preemptive FAQ
```
Q: How does it handle re-rendering ?
A: A block ain't meant to be re-rendered.
```
```
Q: Why use animation frame to render some incomplete frames ?
A: A block must be attached to some thing, here ain't minecraft, blocks don't float
```
```
Q: What kind of classes can be "extended" ?
A: A Block and a Builder, the builder construct with blocks.
```

## Using

### Getting our first Hello World!
```js
class HelloBlock extends Block {
    construct() {
        return "Hello World!"
    }
}

new SiteBuilder()
    .withBlock(new HelloBlock)
    .build()
```

or if you are a parrot
```js
class HelloBlock extends Block {
    construct() {
        return "Hello World!"
    }
}

const parrotBlocks = [new HelloWorld(), new HelloWorld(), new HelloWorld()];

new SiteBuilder()
    .withBlocks(parrotBlocks)
    .build()
```
