import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../../containers/Checkout/ContactData/ContactData";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  /*state = {
        ingredients: null,
        totalPrice: null
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for (let param of query.entries()) {
            //['salad', '1']
            //+param turns it into a number
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }

        }

        this.setState({ ingredients, totalPrice: price });
    }
*/
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHanlder = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            onCheckoutContinued={this.checkoutContinuedHanlder}
            onCheckoutCancelled={this.checkoutCancelledHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return (
      <div>
        {/*<Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.props.ings} totalPrice={this.props.totalPrice} history={this.props.history} />)} /> */}
        {summary}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burguerBuilder.ingredients,
    totalPrice: state.burguerBuilder.totalPrice,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
