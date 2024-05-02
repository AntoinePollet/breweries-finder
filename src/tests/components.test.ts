import { describe, it, expect } from "vitest"
import { createTestingPinia } from '@pinia/testing'
import { mount } from "@vue/test-utils"
import { useBeerStore } from "@/stores/beer"
import BeerHome from "@/views/BeerHome.vue"
import Pagination from "@/components/Pagination.vue"

describe("components", () => {
  it("BeerHome correctly mounted", () => {
    const wrapper = mount(BeerHome, { global: { plugins: [createTestingPinia()] }});
    expect(wrapper.exists());
  });

  it("Pagination correctly mounted", () => {
    const wrapper = mount(Pagination, { global: { plugins: [createTestingPinia()] }});
    expect(wrapper.exists());
  });

  it("correctly updates page when setPage is called", async () => {
    const wrapper = mount(BeerHome, { 
      global: { 
        plugins: [
          createTestingPinia({ 
            stubActions: false,
            initialState: { 
                beer: { query: { page: 1 }}
              }
            }
          )
        ] 
      }
    });
    expect(wrapper.exists());

    const beer = useBeerStore();

    expect(beer.page).toBe(1);
    await beer.setPage(5);

    expect(beer.page).toBe(5);
  });
})