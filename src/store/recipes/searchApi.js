import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/recipes/complexSearch${AUTH}`,
  }),
  endpoints: (builder) => ({
    // query for searching by name of the recipe
    getSearch: builder.query({
      query: (query) => `search?${query && `&query=${query}`}`,
    }),
    filterDiet: builder.query({
      query: (diet) => `search?${diet && `&diet=${diet}`}`,
    }),
    filterCuisine: builder.query({
      query: (cuisine) => `search?${cuisine && `&cuisine=${cuisine}`}`,
    }),
    filterExcludeCuisine: builder.query({
      query: (excludeCuisine) =>
        `search?${excludeCuisine && `&excludeCuisine=${excludeCuisine}`}`,
    }),
    filterIntolerances: builder.query({
      query: (intolerances) =>
        `search?${intolerances && `&intolerances=${intolerances}`}`,
    }),
    filterEquipment: builder.query({
      query: (equipment) => `search?${equipment && `&equipment=${equipment}`}`,
    }),
    filterIncludeIngredients: builder.query({
      query: (includeIngredients) =>
        `search?${
          includeIngredients && `&includeIngredients=${includeIngredients}`
        }`,
    }),
    filterExcludeIngredients: builder.query({
      query: (excludeIngredients) =>
        `search?${
          excludeIngredients && `&excludeIngredients=${excludeIngredients}`
        }`,
    }),
    filterType: builder.query({
      query: (type) => `search?${type && `&type=${type}`}`,
    }),
    filterInstructionsRequired: builder.query({
      query: (instructionsRequired) =>
        `search?${
          instructionsRequired &&
          `&instructionsRequired=${instructionsRequired}`
        }`,
    }),
    filterFillIngredients: builder.query({
      query: (fillIngredients) =>
        `search?${fillIngredients && `&fillIngredients=${fillIngredients}`}`,
    }),
    filterAddRecipeInformation: builder.query({
      query: (addRecipeInformation) =>
        `search?${
          addRecipeInformation &&
          `&addRecipeInformation=${addRecipeInformation}`
        }`,
    }),
    filterAuthor: builder.query({
      query: (author) => `search?${author && `&author=${author}`}`,
    }),
    filterTags: builder.query({
      query: (tags) => `search?${tags && `&tags=${tags}`}`,
    }),
    filterRecipeBoxId: builder.query({
      query: (recipeBoxId) =>
        `search?${recipeBoxId && `&recipeBoxId=${recipeBoxId}`}`,
    }),
    filterMaxReadyTime: builder.query({
      query: (maxReadyTime) =>
        `search?${maxReadyTime && `&maxReadyTime=${maxReadyTime}`}`,
    }),
    filterIgnorePantry: builder.query({
      query: (ignorePantry) =>
        `search?${ignorePantry && `&ignorePantry=${ignorePantry}`}`,
    }),
    filterSort: builder.query({
      query: (sort) => `search?${sort && `&sort=${sort}`}`,
    }),
    filterSortDirection: builder.query({
      query: (sortDirection) =>
        `search?${sortDirection && `&sortDirection=${sortDirection}`}`,
    }),
    filterMinCarbs: builder.query({
      query: (minCarbs) => `search?${minCarbs && `&minCarbs=${minCarbs}`}`,
    }),
    filterMaxCarbs: builder.query({
      query: (maxCarbs) => `search?${maxCarbs && `&maxCarbs=${maxCarbs}`}`,
    }),
    filterMinProtein: builder.query({
      query: (minProtein) =>
        `search?${minProtein && `&minProtein=${minProtein}`}`,
    }),
    filterMaxProtein: builder.query({
      query: (maxProtein) =>
        `search?${maxProtein && `&maxProtein=${maxProtein}`}`,
    }),
    filterMinCalories: builder.query({
      query: (minCalories) =>
        `search?${minCalories && `&minCalories=${minCalories}`}`,
    }),
    filterMaxCalories: builder.query({
      query: (maxCalories) =>
        `search?${maxCalories && `&maxCalories=${maxCalories}`}`,
    }),
    filterMinFat: builder.query({
      query: (minFat) => `search?${minFat && `&minFat=${minFat}`}`,
    }),
    filterMaxFat: builder.query({
      query: (maxFat) => `search?${maxFat && `&maxFat=${maxFat}`}`,
    }),
    filterMinAlcohol: builder.query({
      query: (minAlcohol) =>
        `search?${minAlcohol && `&minAlcohol=${minAlcohol}`}`,
    }),
    filterMaxAlcohol: builder.query({
      query: (maxAlcohol) =>
        `search?${maxAlcohol && `&maxAlcohol=${maxAlcohol}`}`,
    }),
    filterMinCaffeine: builder.query({
      query: (minCaffeine) =>
        `search?${minCaffeine && `&minCaffeine=${minCaffeine}`}`,
    }),
    filterMaxCaffeine: builder.query({
      query: (maxCaffeine) =>
        `search?${maxCaffeine && `&maxCaffeine=${maxCaffeine}`}`,
    }),
    filterMinCopper: builder.query({
      query: (minCopper) => `search?${minCopper && `&minCopper=${minCopper}`}`,
    }),
    filterMaxCopper: builder.query({
      query: (maxCopper) => `search?${maxCopper && `&maxCopper=${maxCopper}`}`,
    }),
    filterMinCalcium: builder.query({
      query: (minCalcium) =>
        `search?${minCalcium && `&minCalcium=${minCalcium}`}`,
    }),
    filterMaxCalcium: builder.query({
      query: (maxCalcium) =>
        `search?${maxCalcium && `&maxCalcium=${maxCalcium}`}`,
    }),
    filterMinCholine: builder.query({
      query: (minCholine) =>
        `search?${minCholine && `&minCholine=${minCholine}`}`,
    }),
    filterMaxCholine: builder.query({
      query: (maxCholine) =>
        `search?${maxCholine && `&maxCholine=${maxCholine}`}`,
    }),
    filterMinCholesterol: builder.query({
      query: (minCholesterol) =>
        `search?${minCholesterol && `&minCholesterol=${minCholesterol}`}`,
    }),
    filterMaxCholesterol: builder.query({
      query: (maxCholesterol) =>
        `search?${maxCholesterol && `&maxCholesterol=${maxCholesterol}`}`,
    }),
    filterMinFluoride: builder.query({
      query: (minFluoride) =>
        `search?${minFluoride && `&minFluoride=${minFluoride}`}`,
    }),
    filterMaxFluoride: builder.query({
      query: (maxFluoride) =>
        `search?${maxFluoride && `&maxFluoride=${maxFluoride}`}`,
    }),
    filterMinFluoride: builder.query({
      query: (minSaturatedFat) =>
        `search?${minSaturatedFat && `&minSaturatedFat=${minSaturatedFat}`}`,
    }),
    filterMaxFluoride: builder.query({
      query: (maxSaturatedFat) =>
        `search?${maxSaturatedFat && `&maxSaturatedFat=${maxSaturatedFat}`}`,
    }),
    filterMinVitaminA: builder.query({
      query: (minVitaminA) =>
        `search?${minVitaminA && `&minVitaminA=${minVitaminA}`}`,
    }),
    filterMaxVitaminA: builder.query({
      query: (maxVitaminA) =>
        `search?${maxVitaminA && `&maxVitaminA=${maxVitaminA}`}`,
    }),
    filterMinVitaminC: builder.query({
      query: (minVitaminC) =>
        `search?${minVitaminC && `&minVitaminC=${minVitaminC}`}`,
    }),
    filterMaxVitaminC: builder.query({
      query: (maxVitaminC) =>
        `search?${maxVitaminC && `&maxVitaminC=${maxVitaminC}`}`,
    }),
    filterMaxVitaminD: builder.query({
      query: (maxVitaminD) =>
        `search?${maxVitaminD && `&maxVitaminD=${maxVitaminD}`}`,
    }),
    filterMinVitaminD: builder.query({
      query: (minVitaminD) =>
        `search?${minVitaminD && `&minVitaminD=${minVitaminD}`}`,
    }),
    filterMinVitaminE: builder.query({
      query: (minVitaminE) =>
        `search?${minVitaminE && `&minVitaminE=${minVitaminE}`}`,
    }),
    filterMaxVitaminE: builder.query({
      query: (maxVitaminE) =>
        `search?${maxVitaminE && `&maxVitaminE=${maxVitaminE}`}`,
    }),
    filterMinVitaminK: builder.query({
      query: (minVitaminK) =>
        `search?${minVitaminK && `&minVitaminK=${minVitaminK}`}`,
    }),
    filterMaxVitaminK: builder.query({
      query: (maxVitaminK) =>
        `search?${maxVitaminK && `&maxVitaminK=${maxVitaminK}`}`,
    }),
    filterMinVitaminB1: builder.query({
      query: (minVitaminB1) =>
        `search?${minVitaminB1 && `&minVitaminB1=${minVitaminB1}`}`,
    }),
    filterMaxVitaminB1: builder.query({
      query: (maxVitaminB1) =>
        `search?${maxVitaminB1 && `&maxVitaminB1=${maxVitaminB1}`}`,
    }),
    filterMinVitaminB2: builder.query({
      query: (minVitaminB2) =>
        `search?${minVitaminB2 && `&minVitaminB2=${minVitaminB2}`}`,
    }),
    filterMaxVitaminB2: builder.query({
      query: (maxVitaminB2) =>
        `search?${maxVitaminB2 && `&maxVitaminB2=${maxVitaminB2}`}`,
    }),
    filterMinVitaminB5: builder.query({
      query: (minVitaminB5) =>
        `search?${minVitaminB5 && `&minVitaminB5=${minVitaminB5}`}`,
    }),
    filterMaxVitaminB5: builder.query({
      query: (maxVitaminB5) =>
        `search?${maxVitaminB5 && `&maxVitaminB5=${maxVitaminB5}`}`,
    }),
    filterMinVitaminB3: builder.query({
      query: (minVitaminB3) =>
        `search?${minVitaminB3 && `&minVitaminB3=${minVitaminB3}`}`,
    }),
    filterMaxVitaminB3: builder.query({
      query: (maxVitaminB3) =>
        `search?${maxVitaminB3 && `&maxVitaminB3=${maxVitaminB3}`}`,
    }),
    filterMinVitaminB6: builder.query({
      query: (minVitaminB6) =>
        `search?${minVitaminB6 && `&minVitaminB6=${minVitaminB6}`}`,
    }),
    filterMaxVitaminB6: builder.query({
      query: (maxVitaminB6) =>
        `search?${maxVitaminB6 && `&maxVitaminB6=${maxVitaminB6}`}`,
    }),
    filterMinVitaminB12: builder.query({
      query: (minVitaminB12) =>
        `search?${minVitaminB12 && `&minVitaminB12=${minVitaminB12}`}`,
    }),
    filterMaxVitaminB12: builder.query({
      query: (maxVitaminB12) =>
        `search?${maxVitaminB12 && `&maxVitaminB12=${maxVitaminB12}`}`,
    }),
    filterMinFiber: builder.query({
      query: (minFiber) => `search?${minFiber && `&minFiber=${minFiber}`}`,
    }),
    filterMaxFiber: builder.query({
      query: (maxFiber) => `search?${maxFiber && `&maxFiber=${maxFiber}`}`,
    }),
    filterMinFolate: builder.query({
      query: (minFolate) => `search?${minFolate && `&minFolate=${minFolate}`}`,
    }),
    filterMaxFolate: builder.query({
      query: (maxFolate) => `search?${maxFolate && `&maxFolate=${maxFolate}`}`,
    }),
    filterMinFolicAcid: builder.query({
      query: (minFolicAcid) =>
        `search?${minFolicAcid && `&minFolicAcid=${minFolicAcid}`}`,
    }),
    filterMaxFolicAcid: builder.query({
      query: (maxFolicAcid) =>
        `search?${maxFolicAcid && `&maxFolicAcid=${maxFolicAcid}`}`,
    }),
    filterMinIodine: builder.query({
      query: (minIodine) => `search?${minIodine && `&minIodine=${minIodine}`}`,
    }),
    filterMaxIodine: builder.query({
      query: (maxIodine) => `search?${maxIodine && `&maxIodine=${maxIodine}`}`,
    }),
    filterMinIron: builder.query({
      query: (minIron) => `search?${minIron && `&minIron=${minIron}`}`,
    }),
    filterMaxIron: builder.query({
      query: (maxIron) => `search?${maxIron && `&maxIron=${maxIron}`}`,
    }),
    filterMinMagnesium: builder.query({
      query: (minMagnesium) =>
        `search?${minMagnesium && `&minMagnesium=${minMagnesium}`}`,
    }),
    filterMaxMagnesium: builder.query({
      query: (maxMagnesium) =>
        `search?${maxMagnesium && `&maxMagnesium=${maxMagnesium}`}`,
    }),
    filterMinManganese: builder.query({
      query: (minManganese) =>
        `search?${minManganese && `&minManganese=${minManganese}`}`,
    }),
    filterMaxManganese: builder.query({
      query: (maxManganese) =>
        `search?${maxManganese && `&maxManganese=${maxManganese}`}`,
    }),
    filterMinPhosphorus: builder.query({
      query: (minPhosphorus) =>
        `search?${minPhosphorus && `&minPhosphorus=${minPhosphorus}`}`,
    }),
    filterMaxPhosphorus: builder.query({
      query: (maxPhosphorus) =>
        `search?${maxPhosphorus && `&maxPhosphorus=${maxPhosphorus}`}`,
    }),
    filterMinPotassium: builder.query({
      query: (minPotassium) =>
        `search?${minPotassium && `&minPotassium=${minPotassium}`}`,
    }),
    filterMaxPotassium: builder.query({
      query: (maxPotassium) =>
        `search?${maxPotassium && `&maxPotassium=${maxPotassium}`}`,
    }),
    filterMinSelenium: builder.query({
      query: (minSelenium) =>
        `search?${minSelenium && `&minSelenium=${minSelenium}`}`,
    }),
    filterMaxSelenium: builder.query({
      query: (maxSelenium) =>
        `search?${maxSelenium && `&maxSelenium=${maxSelenium}`}`,
    }),
    filterMinSodium: builder.query({
      query: (minSodium) => `search?${minSodium && `&minSodium=${minSodium}`}`,
    }),
    filterMaxSodium: builder.query({
      query: (maxSodium) => `search?${maxSodium && `&maxSodium=${maxSodium}`}`,
    }),
    filterMinSugar: builder.query({
      query: (minSugar) => `search?${minSugar && `&minSugar=${minSugar}`}`,
    }),
    filterMaxSugar: builder.query({
      query: (maxSugar) => `search?${maxSugar && `&maxSugar=${maxSugar}`}`,
    }),
    filterMinZinc: builder.query({
      query: (minZinc) => `search?${minZinc && `&minZinc=${minZinc}`}`,
    }),
    filterMaxZinc: builder.query({
      query: (maxZinc) => `search?${maxZinc && `&maxZinc=${maxZinc}`}`,
    }),
    filterOffset: builder.query({
      query: (offset) => `search?${offset && `&offset=${offset}`}`,
    }),
    filterNumber: builder.query({
      query: (number) => `search?${number && `&number=${number}`}`,
    }),
    filterLimitLicense: builder.query({
      query: (limitLicense) =>
        `search?${limitLicense && `&limitLicense=${limitLicense}`}`,
    }),
  }),
});

export const {
  useGetSearchQuery,
  useFilterAddRecipeInformationQuery,
  useFilterAuthorQuery,
  useFilterCuisineQuery,
  useFilterDietQuery,
  useFilterEquipmentQuery,
  useFilterExcludeCuisineQuery,
  useFilterExcludeIngredientsQuery,
  useFilterFillIngredientsQuery,
  useFilterIgnorePantryQuery,
  useFilterIncludeIngredientsQuery,
  useFilterInstructionsRequiredQuery,
  useFilterIntolerancesQuery,
  useFilterLimitLicenseQuery,
  useFilterMaxAlcoholQuery,
  useFilterMaxCalciumQuery,
  useFilterMaxCaffeineQuery,
  useFilterMaxCaloriesQuery,
  useFilterMaxCarbsQuery,
  useFilterMaxCholesterolQuery,
  useFilterMaxCholineQuery,
  useFilterMaxCopperQuery,
  useFilterMaxFatQuery,
  useFilterMaxFiberQuery,
  useFilterMaxFluorideQuery,
  useFilterMaxFolateQuery,
  useFilterMaxFolicAcidQuery,
  useFilterMaxIodineQuery,
  useFilterMaxIronQuery,
  useFilterMinCalciumQuery,
  useFilterMaxMagnesiumQuery,
  useFilterMaxManganeseQuery,
  useFilterMaxPhosphorusQuery,
  useFilterMaxPotassiumQuery,
  useFilterMaxProteinQuery,
  useFilterMaxReadyTimeQuery,
  useFilterMaxSeleniumQuery,
  useFilterMaxSodiumQuery,
  useFilterMaxSugarQuery,
  useFilterMaxVitaminAQuery,
  useFilterMaxVitaminB12Query,
  useFilterMaxVitaminB1Query,
  useFilterMaxVitaminB2Query,
  useFilterMaxVitaminB3Query,
  useFilterMaxVitaminB5Query,
  useFilterMaxVitaminB6Query,
  useFilterMaxVitaminCQuery,
  useFilterMaxVitaminDQuery,
  useFilterMaxVitaminEQuery,
  useFilterMaxVitaminKQuery,
  useFilterMaxZincQuery,
  useFilterMinCaloriesQuery,
  useFilterMinAlcoholQuery,
  useFilterMinCaffeineQuery,
  useFilterMinCarbsQuery,
  useFilterMinCholesterolQuery,
  useFilterMinCholineQuery,
  useFilterMinCopperQuery,
  useFilterMinFatQuery,
  useFilterMinFiberQuery,
  useFilterMinFluorideQuery,
  useFilterMinFolateQuery,
  useFilterMinFolicAcidQuery,
  useFilterMinIodineQuery,
  useFilterMinIronQuery,
  useFilterMinMagnesiumQuery,
  useFilterMinManganeseQuery,
  useFilterMinPhosphorusQuery,
  useFilterMinPotassiumQuery,
  useFilterMinProteinQuery,
  useFilterMinSeleniumQuery,
  useFilterMinSodiumQuery,
  useFilterMinSugarQuery,
  useFilterMinVitaminAQuery,
  useFilterMinVitaminB12Query,
  useFilterMinVitaminB1Query,
  useFilterMinVitaminB2Query,
  useFilterMinVitaminB3Query,
  useFilterMinVitaminB5Query,
  useFilterMinVitaminB6Query,
  useFilterMinVitaminCQuery,
  useFilterMinVitaminDQuery,
  useFilterMinVitaminEQuery,
  useFilterMinVitaminKQuery,
  useFilterMinZincQuery,
  useFilterNumberQuery,
  useFilterOffsetQuery,
  useFilterRecipeBoxIdQuery,
  useFilterSortDirectionQuery,
  useFilterSortQuery,
  useFilterTagsQuery,
  useFilterTypeQuery,
  use,
} = searchApi;
