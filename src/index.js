import math from 'mathjs';
import {exportToWindow} from './utils';
// import Plotly from 'plotly.js/dist/plotly';
import {range, groupBy, findIndex, filter} from 'lodash';
import prob from 'probability-distributions';
import Network from './Network';
import {sigmoid} from './activations';

// A perceptron is a node that has weights and a bias. Given an array of
// inputs equal to the length of weights it produces an ouput value. By changing
// the value of the weights it can be made to mimic logic gates. Since logic gates
// are capable of computing any logical function its stands to reason that a network
// or perceptrons should be capable of computing any logical function.
const createPerceptron = (weights, bias) => {
    return inputs => math.dot(weights, inputs) + bias > 0 ? 1 : 0;
}

const createSigmoidNeuron = (weights, bias) => {
    return inputs => sigmoid(- math.dot(weights, inputs) - bias);
}

function runPlot () {
    const inputs = range(-10, 10);
    const neuron = createSigmoidNeuron([-2, -1], 0);
    Plotly.plot(document.getElementById('root'), [{
        x: inputs,
        y: inputs.map(input => neuron([-input, input]))
    }, {
        margin: {t: 0}
    }])
}

function plotNormalDistribution () {
    const data = prob.rnorm(50000);
    const steps = range(-2, 2, 0.1);
    const counts = steps.map(high => {
        const low = high - 0.1;
        return filter(data, n => (n > low && n <= high)).length;
    });
    Plotly.plot(document.getElementById('root'), [{
        x: steps,
        y: counts
    }, {
        margin: {t: 0}
    }]);
}

// runPlot()

exportToWindow({
    createPerceptron, math, sigmoid, createSigmoidNeuron,
    // Plotly,
    Network, prob, range, plotNormalDistribution
});
