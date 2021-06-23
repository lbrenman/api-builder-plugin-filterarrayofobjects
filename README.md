# API Builder Plugin to Filter an Array Based on a Keys Value

[**Axway API Builder**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder.html) flow-node that use the array filter() method to return a filtered array based on a key's value: *api-builder-plugin-filterarrayofobjects*. This is a common requirement for processing API responses for retrieving desired array elements.

> Note: Currently only supports String and Number values

## About flow-nodes

Flow-nodes are used within [Axway API Builder's](https://www.axway.com/en/datasheet/axway-api-builder)
flow editor that is a low-code / no-code solution to designing and developing services
that integrate to many different connected components, such as databases and APIs.

## Install

After creating your [**API Builder Project**](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_getting_started_guide.html), you can install this plugin using npm:

```
npm install api-builder-plugin-filterarrayofobjects
```

> Note that this command will install from npm. If you want to install locally, then provide the full path to the plugin folder

## Use

Find the plugin in the extension group in the Flow-Nodes panel. Drag onto the canvas and select the desired method and provide the input and wire up to the rest of your flow as shown below:

![](https://i.imgur.com/gDRYIJj.png)

## Methods

The currently implemented methods are described below.

### Filter

Provide the *Array*, *Key* and *Value* inputs and the output will be similar to below:

Array = [{a:'100', b:'red'}, {a:'200', b:'green'}, {a:'300', b:'blue'}]

Key = 'b'

Value = 'green'

```
{
  a:'200',
  b:'green'
}
```
