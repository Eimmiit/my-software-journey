let orders = [
    {
        id: 1,
        customer: "Eimmiit",
        product: "Laptop",
        price: 500000,
        quantity: 1,
        status: "completed"
    },
    {
        id: 2,
        customer: "John",
        product: "Mouse",
        price: 15000,
        quantity: 2,
        status: "completed"
    },
    {
        id: 3,
        customer: "Sarah",
        product: "Keyboard",
        price: 30000,
        quantity: 1,
        status: "pending"
    },
    {
        id: 4,
        customer: "David",
        product: "Monitor",
        price: 150000,
        quantity: 2,
        status: "completed"
    },
    {
        id: 5,
        customer: "Mary",
        product: "Headphones",
        price: 50000,
        quantity: 3,
        status: "cancelled"
    },
    {
        id: 6,
        customer: "Daniel",
        product: "Webcam",
        price: 45000,
        quantity: 1,
        status: "completed"
    }
];

function getCompletedOrders(orders) {
    let completedOrders = orders.filter(function (order) {
        return order.status === 'completed';
    });
    return completedOrders;
}
console.log(getCompletedOrders(orders))

function getPendingOrders(orders) {
    let pendingOrders = orders.filter(function (order) {
        return order.status === 'pending';
    });
    return pendingOrders;
}
console.log(getPendingOrders(orders));

function getCancelledOrders(orders) {
    let cancelledOrders = orders.filter(function (order) {
        return order.status === 'cancelled';
    });
    return cancelledOrders;
}
console.log(getCancelledOrders(orders));

function getCustomerNames(orders) {
    let customerNames = orders.map(function ({ customer }) {
        return customer;
    });
    return customerNames;
}
console.log(getCustomerNames(orders));

function getOrderValues(orders) {
    let orderValue = orders.map(function ({ price, quantity }) {
        return price * quantity;
    });
    return orderValue;
}
console.log(getOrderValues(orders));

function calculateCompletedRevenue(orders) {
    let completedRevenue = orders.filter(function (order) {
        return order.status === 'completed';
    }).map(function ({ price, quantity }) {
        return price * quantity;
    }).reduce(function (total, eachOrederVal) {
        return total + eachOrederVal;
    }, 0)
    return completedRevenue;
}
console.log(calculateCompletedRevenue(orders));

function calculateTotalItemSold(orders) {
    return getCompletedOrders(orders).reduce(function (total, { quantity }) {
        return total + quantity;
    }, 0)
}
console.log(calculateTotalItemSold(orders));

function getMostExpensiveOrder(orders) {
    let mostExpensiveOrder = getCompletedOrders(orders).reduce(function (highest, { price }) {
        if ( highest < price) {
            highest = price;
        }
        return highest;
    }, 0);
    
    let mostExpensiveCompletedOrederObj = getCompletedOrders(orders).find(function({price}){
        return price === mostExpensiveOrder;
    })
    return mostExpensiveCompletedOrederObj
}
console.log(getMostExpensiveOrder(orders));

function hasPendingOrders(orders){
    let pendingOrder = orders.some(function(order){
        return order.status === "pending";
    });
    return pendingOrder;
}
console.log(hasPendingOrders(orders));

function areAllOrdersCompleted(orders){
    let allOrderCompleted = orders.every(function(order){
        return order.status === "completed";
    });
    return allOrderCompleted
};
console.log(areAllOrdersCompleted(orders))

function getOrderSummary(orders){
    let orderSummary = {}
    orderSummary.totalOrders = orders.length;
    orderSummary.completedOrders = getCompletedOrders(orders).length;
    orderSummary.pendingOrders = getPendingOrders(orders).length;
    orderSummary.cancelledOrders = getCancelledOrders(orders).length;
    orderSummary.totalItemsSold = calculateTotalItemSold(orders);
    orderSummary.completedRevenue = calculateCompletedRevenue(orders);

    function getPriceFromTheHighest({price}){
        return price;
    }

    orderSummary.highestOrderValue = getPriceFromTheHighest(getMostExpensiveOrder(orders));
    // orderSummary.highestOrderValue = getMostExpensiveOrder(orders).price;

    return orderSummary;
}
let summary = getOrderSummary(orders);
console.log(summary)

function processOrders(orders, operation) {
    console.log(operation(orders));
};
processOrders(orders, getCustomerNames);
processOrders(orders, getCompletedOrders);