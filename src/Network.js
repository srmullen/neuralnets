import prob from 'probability-distributions';
import {drop, dropRight, zip} from 'lodash';
import {sigmoid} from './activations';
import math from 'mathjs';

function Network (sizes = []) {
    // The number of layers in the network.
    this.numLayers = sizes.length;
    // The number of neurons in each layer.
    this.sizes = sizes;
    // Create biases for each neuron (excluding the input layer) according to a
    // normal distribution.
    this.biases = drop(sizes).map(size => prob.rnorm(size));
    this.weights = zip(dropRight(sizes), drop(sizes)).map(([x, y]) => {
        let ret = [];
        for (let i = 0; i < y; i++) {
            ret.push(prob.rnorm(x));
        }
        return ret;
    });
}

Network.prototype.feedforward = function (activations) {
    // Traverse the network layer by layer.
    // acc is an array of activations that come out of each layer.
    return zip(this.biases, this.weights).reduce((acc, [layerBiases, layerWeights]) => {
        // Traverse each node in the layer
        return zip(layerBiases, layerWeights).reduce((outputs, [bias, weights]) => {
            // Compute the activation from each neuron.
            return outputs.concat([sigmoid(math.dot(weights, acc) + bias)]);
        }, []);
    }, activations);
}

// Stocastic Gradient Decent
// trainingData - List of inputs and the expected outputs.
// epochs - the number of epochs to train for.
// miniBatchSize - the sample batch size.
// eta - the learning rate
Network.prototype.sgd = function (trainingData, epochs, miniBatchSize, eta) {

}

// Update the networks weights and biases by applying graident decent
// using backpropagation to a single mini batch.
Network.prototype.updateMiniBatch = function (miniBatch, eta) {

}

Network.prototype.backprop = function () {
    
}

export default Network;
