let obj = JSON.parse($response.body);
obj["subscriber"]["subscriptions"]= {
    "wc_pro_1m" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "active",
        "expires_date" : "2099-12-01T03:51:32Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2021-09-24T06:33:41Z",
        "purchase_date" : "2021-09-24T06:33:41Z",
        "store" : "app_store"
    }
};
obj["subscriber"]["entitlements"]= {
    "entitlements" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2021-09-24T06:33:41Z",
        "product_identifier" : "wc_pro_1m",
        "expires_date" : "2099-12-01T03:51:32Z"
    }
};
$done({body: JSON.stringify(obj)});
