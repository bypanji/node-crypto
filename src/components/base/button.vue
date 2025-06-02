<template>
    <div>
        <component
        :is="tagName"
        :href="href"
        :class="classNames"
        >
        <slot />
        </component>
    </div>
</template>
<script lang="ts" setup>
import { type PropType, computed, resolveComponent } from 'vue';
type StyleVariant = 'solid' | 'outline' | 'link'
type ColorVariant = 'primary' |'danger' | 'warning' | 'success'
type SizeVariant = 'lg' | 'sm' | 'md'

const props = defineProps({
    variant : {
        type : String as PropType<StyleVariant>,
        default: 'outline'
    },
    color: {
        type: String as PropType<ColorVariant>,
        default: 'primary'
    },
    size: {
        type: String as PropType<SizeVariant>,
        default: 'md'
    },
    href: {
        type: String,
        default: undefined
    }
})

const classNames = computed(() => {
    const result: string[] = ['btn']

    if(props.size) 
        result.push(`btn--${props.size}`)
    if (props.variant)
        result.push(`btn--variant-${props.variant}`)
    if(props.color)
        result.push(`btn--${props.color}`)

    return result
})

const tagName = computed(() => {
    return props.href ? resolveComponent('nuxt-link') : 'button'
})
</script>
<style lang="postcss" scoped>
.btn {
  --bi-color-primary-hover: darken(theme(colors.brand.action), 5%);
  --bi-color-primary-focus: darken(theme(colors.brand.action), 10%);
  --bi-color-info-hover: darken(theme(backgroundColor.info.emphasis), 5%);
  --bi-color-info-focus: darken(theme(backgroundColor.info.emphasis), 10%);
  --bi-color-success-hover: darken(theme(backgroundColor.success.emphasis), 5%);
  --bi-color-success-focus: darken(theme(backgroundColor.success.emphasis), 10%);
  --bi-color-warning-hover: darken(theme(backgroundColor.warning.emphasis), 5%);
  --bi-color-warning-focus: darken(theme(backgroundColor.warning.emphasis), 10%);
  --bi-color-danger-hover: darken(theme(backgroundColor.danger.emphasis), 5%);
  --bi-color-danger-focus: darken(theme(backgroundColor.danger.emphasis), 10%);
  --bi-button-xs-padding-x: theme(spacing.2);
  --bi-button-sm-padding-x: theme(spacing.4);
  --bi-button-md-padding-x: theme(spacing.5);
  --bi-button-lg-padding-x: theme(spacing.8);

  @apply border-2 rounded-lg mx-2;

  &&--xs {
    @apply px-[var(--bi-button-xs-padding-x)] py-[2px] gap-1 text-sm rounded-xs;
  }

  &&--sm {
    @apply px-[var(--bi-button-sm-padding-x)] py-1 gap-2 text-base tracking-wider rounded-sm;
  }

  &&--md {
    @apply px-[var(--bi-button-md-padding-x)] py-[10px] gap-3 text-base tracking-wider rounded;
  }

  &&--lg {
    @apply px-[var(--bi-button-lg-padding-x)] py-4 gap-4 text-base tracking-wider rounded;
  }

  &&--variant-solid {
    @apply border border-solid hover:shadow-lg focus:shadow-none active:shadow-none text-state-emphasis hover:text-state-emphasis;
  }

  &&--variant-outline,
  &&--variant-ghost {
    @apply border border-solid text-default hover:text-default hover:shadow-lg focus:shadow-none active:shadow-none focus:text-default active:text-default;
  }

  &&--variant-outline,
  &&--variant-solid{
    &.btn {
      &--default {
        @apply bg-default-alpha focus:bg-subtle-alpha active:bg-subtle-alpha hover:text-default focus:text-default;
      }

      &--primary {
        @apply bg-brand-action hover:bg-[color:var(--bi-color-primary-hover)] focus:bg-[color:var(--bi-color-primary-focus)] active:bg-[color:var(--bi-color-primary-focus)];
      }

      &--info {
        @apply bg-info-emphasis hover:bg-[color:var(--bi-color-info-hover)] focus:bg-[color:var(--bi-color-info-focus)] active:bg-[color:var(--bi-color-info-focus)];
      }

      &--success {
        @apply bg-success-emphasis hover:bg-[color:var(--bi-color-success-hover)] focus:bg-[color:var(--bi-color-success-focus)] active:bg-[color:var(--bi-color-success-focus)];
      }

      &--warning {
        @apply bg-warning-emphasis hover:bg-[color:var(--bi-color-warning-hover)] focus:bg-[color:var(--bi-color-warning-focus)] active:bg-[color:var(--bi-color-warning-focus)];
      }

      &--danger {
        @apply bg-danger-emphasis hover:bg-[color:var(--bi-color-danger-hover)] focus:bg-[color:var(--bi-color-danger-focus)] active:bg-[color:var(--bi-color-danger-focus)];
      }
    }
  }
}
    
</style>