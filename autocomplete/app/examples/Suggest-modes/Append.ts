import { Frame } from 'tns-core-modules/ui/frame';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
// >> autocomplete-append-mode-vue
import { AutoCompleteSuggestMode } from 'nativescript-ui-autocomplete';
import { getCountry, getCountriesCount } from '../data';
import DisplayModes from '~/examples/Display-modes/Display-modes';

const description = 'Append';

export default {
  name: 'Append',
  description: description,
  template: `
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="onNavigationButtonTap"></NavigationButton>
    </ActionBar>
    <StackLayout ios:backgroundColor="#CDCECE" padding="5">
      <Label text="Select country"></Label>
      <RadAutoCompleteTextView ref="autocomplete"
                               :suggestMode="suggestMode"
                               :items="dataItems">
        <SuggestionView ~suggestionView suggestionViewHeight="300">
          <StackLayout v-suggestionItemTemplate orientation="vertical" padding="10">
            <v-template>
              <StackLayout orientation="vertical">
                <Label :text="item.text" marginLeft="5" android:marginTop="15"></Label>
              </StackLayout>
            </v-template>
          </StackLayout>
        </SuggestionView>
      </RadAutoCompleteTextView>
    </StackLayout>
  </Page>
  `,
  data () {
    let dataItems = new ObservableArray();

    for (let i = 0; i < getCountriesCount(); i++) {
      dataItems.push(getCountry(i));
    }
    return {
      title: description,
      dataItems: dataItems,
      suggestMode: AutoCompleteSuggestMode.Append
    };
  },
  methods: {
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    }
  }
};
// << autocomplete-append-mode-vue