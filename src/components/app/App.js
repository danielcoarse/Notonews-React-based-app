import React, { Component } from "react";
import CONSTANTS from "../../constants";
import Header from "../header/header";
import NewsApiService from "../../services/newsapi-service";
import CategorySelect from "../category-select/category-select";
import CardSection from "../card-section/card-section";
import SearchModal from "../search-modal/search-modal";
import Card from "../card/card";
import Loader from "../loader/loader";
import Alert from "../alert/alert";

export default class App extends Component {
  newsApiService = new NewsApiService();

  state = {
    articlesList: [],
    isLoading: true,
    popupActive: false,
    searchStatus: false,
    loadingError: false,
    infoAlert: false,
    sortKey: null,
  };

  loadAtricles(res) {
    this.deactiveLoader();

    if (!res.articles.length) {
      this.setState({
        infoAlert: true,
        articlesList: [],
      });
      return;
    }

    this.setState({
      infoAlert: false,
      articlesList: res.articles,
    });
  }

  activeLoader() {
    this.setState({
      isLoading: true,
    });
  }

  deactiveLoader() {
    this.setState({
      isLoading: false,
    });
  }

  changeSearchBarIcon(status) {
    const el = document.getElementById("search-icon");
    el.firstChild.textContent = status ? "search" : "close";
  }

  onSearchHandler = (e) => {
    this.setState(({ searchStatus }) => {
      return {
        searchStatus: !searchStatus,
      };
    });

    this.changeSearchBarIcon(this.state.searchStatus);

    this.setState(({ popupActive }) => {
      return {
        popupActive: !popupActive,
      };
    });
  };

  onSearchSubmitHandler = (value) => {
    this.activeLoader();

    this.newsApiService
      .everithing(value)
      .then((res) => this.loadAtricles(res))
      .catch((err) => this.loadingError(err));
  };

  onCategoryClickHandler = (e) => {
    const value = e.target.dataset.value;

    this.activeLoader();

    this.setState({
      sortKey: value,
    });

    this.newsApiService
      .topHeadlines("us", value)
      .then((res) => this.loadAtricles(res))
      .catch((err) => this.loadingError(err));
  };

  onClickCardSectionHandler = () => {
    if (this.state.popupActive) {
      this.setState({
        popupActive: false,
        searchStatus: false,
      });
      this.changeSearchBarIcon(this.state.searchStatus);
    }
  };

  loadingError(err) {
    console.log(err);
    this.deactiveLoader();
    this.setState({
      loadingError: true,
      articlesList: [],
    });
  }

  componentDidMount() {
    this.activeLoader();

    this.newsApiService
      .topHeadlines()
      .then((res) => this.loadAtricles(res))
      .catch((err) => this.loadingError(err));
  }

  render() {
    const {
      articlesList,
      isLoading,
      popupActive,
      loadingError,
      infoAlert,
      sortKey,
    } = this.state;

    const loader = isLoading ? <Loader /> : null;

    const errorMsg = loadingError ? (
      <Alert alertType="alert-danger" text="Something has terribly wrong!" />
    ) : null;

    const infoMsg = infoAlert ? (
      <Alert alertType="alert-warning" text="Not found!" />
    ) : null;

    return (
      <div className="App">
        <Header
          popupActive={popupActive}
          onSearchHandler={this.onSearchHandler}
        />
        <CategorySelect
          categories={CONSTANTS.categories}
          onClick={this.onCategoryClickHandler}
          sortKey={sortKey}
        />
        {errorMsg}
        {infoMsg}
        <CardSection onClickHandler={this.onClickCardSectionHandler}>
          {loader}
          {articlesList.map((article) => (
            <Card article={article} key={Math.random()} />
          ))}
        </CardSection>
        {popupActive ? (
          <SearchModal
            onSubmitHandler={this.onSearchSubmitHandler}
            isActive={popupActive}
          />
        ) : (
          <SearchModal onSubmitHandler={this.onSearchSubmitHandler} />
        )}
      </div>
    );
  }
}
