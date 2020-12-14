<template>
  <div class="card">
    <div class="card-body text-center">
      <h4>Welcome to the cat facts page</h4>
      <div>🐾</div>
      <span> Use the nav menu above to find new facts! </span>
    </div>
    <hr style="margin: 60px 0" />
    <div class="d-flex justify-content-center">
      <button @click="increment()">count is: {{ count }}</button>
    </div>
    <div class="d-flex justify-content-center" style="margin: 30px 0">
      {{ pow(2, 1) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, PropType } from 'vue'

interface State {
  title: string
  year: number
  todos?: Todo[]
}

interface Todo {
  name: string
  isComplete: boolean
}

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  name: 'Home',
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>
    },
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  },
  setup() {
    const count = ref(0) // Refs infer the type from the initial value
    const state: State = reactive<State>({
      title: '',
      year: 2020,
      todos: [
        {
          name: 'homework',
          isComplete: false
        },
        {
          name: 'cook',
          isComplete: true
        }
      ]
    })

    function increment(): void {
      // count.value = 'A String'
      // count.value = pow(2, 3)
      count.value++
    }

    function pow(x: number, y: number): number {
      return Math.pow(x, y)
    }

    return {
      count,
      increment,
      pow
    }
  }
})
</script>