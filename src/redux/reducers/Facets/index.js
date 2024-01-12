import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staticTopics: null,
  topics: null,
  gisTopics: null,
  publishers: null,
  tags: null,
  file_Formats: null,
  filter: null,
  gisFilter: null,
  search: "",
  storiesTags: null,
  datasetsSuggestion: null,
  supportSuggestion: null,
  applicationsSuggestion: null,
  datasetCount: 1,
  currentPageDataS: 1,
  publisherCount: 1,
  applicationCount: 1,
  // currentValue: 0,
};

export const facetsSlice = createSlice({
  name: "facets",
  initialState,
  reducers: {
    setStaticTopics: (state, action) => {
      state.staticTopics = action.payload;
    },
    setTopics: (state, action) => {
      state.topics = action.payload;
    },
    setGisTopics: (state, action) => {
      state.gisTopics = action.payload;
    },
    setPublishers: (state, action) => {
      state.publishers = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setFileFormats: (state, action) => {
      state.file_Formats = action.payload;
    },
    setStoriesTags: (state, action) => {
      state.storiesTags = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setGisFilter: (state, action) => {
      state.gisFilter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDatasetsSuggestion: (state, action) => {
      state.datasetsSuggestion = action.payload;
    },
    setSupportSuggestion: (state, action) => {
      state.supportSuggestion = action.payload;
    },
    setApplicationsSuggestion: (state, action) => {
      state.applicationsSuggestion = action.payload;
    },
    setDatasetCount: (state, action) => {
      state.datasetCount = action.payload;
    },
    setPublisherCount: (state, action) => {
      state.publisherCount = action.payload;
    },
    setCurrentPageCount: (state, action) => {
      state.currentPageDataS = action.payload;
    },
    setApplicationCount: (state, action) => {
      state.applicationCount = action.payload;
    },
    // setTabActiveValue: (state, action) => {
    //   state.currentValue = action.payload;
    // },
  },
});

export const {
  setStaticTopics,
  setTopics,
  setGisTopics,
  setPublishers,
  setTags,
  setFileFormats,
  setFilter,
  setGisFilter,
  setSearch,
  setStoriesTags,
  setDatasetsSuggestion,
  setSupportSuggestion,
  setApplicationsSuggestion,
  setDatasetCount,
  setCurrentPageCount,
  setPublisherCount,
  setApplicationCount,
  // setTabActiveValue,
} = facetsSlice.actions;

export default facetsSlice.reducer;
