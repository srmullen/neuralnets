// In order to train a network small changes to weights needs to produce small
// changes in a nodes output. This was not necessarily the case with a perceptron.
// The sigmoid function compresses the output into a range from -1 to 1.
export const sigmoid = (z) => {
    return 1 / (1 + Math.pow(Math.E, -z));
}
