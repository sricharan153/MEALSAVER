const MLR = require('ml-regression').MultivariateLinearRegression;

// Example historical data (features and target)
const features = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
];
const target = [1.1, 2.2, 3.3, 4.4]; // Example demand data

const mlr = new MLR(features, target);

function predictDemand(newFeatures) {
    return mlr.predict(newFeatures);
}

module.exports = predictDemand;
