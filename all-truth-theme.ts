
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myAllTruthTheme: CustomThemeConfig = {
    name: 'all-truth-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #239fbc 
		"--color-primary-50": "222 241 245", // #def1f5
		"--color-primary-100": "211 236 242", // #d3ecf2
		"--color-primary-200": "200 231 238", // #c8e7ee
		"--color-primary-300": "167 217 228", // #a7d9e4
		"--color-primary-400": "101 188 208", // #65bcd0
		"--color-primary-500": "35 159 188", // #239fbc
		"--color-primary-600": "32 143 169", // #208fa9
		"--color-primary-700": "26 119 141", // #1a778d
		"--color-primary-800": "21 95 113", // #155f71
		"--color-primary-900": "17 78 92", // #114e5c
		// secondary | #f18515 
		"--color-secondary-50": "253 237 220", // #fdeddc
		"--color-secondary-100": "252 231 208", // #fce7d0
		"--color-secondary-200": "252 225 197", // #fce1c5
		"--color-secondary-300": "249 206 161", // #f9cea1
		"--color-secondary-400": "245 170 91", // #f5aa5b
		"--color-secondary-500": "241 133 21", // #f18515
		"--color-secondary-600": "217 120 19", // #d97813
		"--color-secondary-700": "181 100 16", // #b56410
		"--color-secondary-800": "145 80 13", // #91500d
		"--color-secondary-900": "118 65 10", // #76410a
		// tertiary | #8fcae7 
		"--color-tertiary-50": "238 247 251", // #eef7fb
		"--color-tertiary-100": "233 244 250", // #e9f4fa
		"--color-tertiary-200": "227 242 249", // #e3f2f9
		"--color-tertiary-300": "210 234 245", // #d2eaf5
		"--color-tertiary-400": "177 218 238", // #b1daee
		"--color-tertiary-500": "143 202 231", // #8fcae7
		"--color-tertiary-600": "129 182 208", // #81b6d0
		"--color-tertiary-700": "107 152 173", // #6b98ad
		"--color-tertiary-800": "86 121 139", // #56798b
		"--color-tertiary-900": "70 99 113", // #466371
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #cb3423 
		"--color-error-50": "247 225 222", // #f7e1de
		"--color-error-100": "245 214 211", // #f5d6d3
		"--color-error-200": "242 204 200", // #f2ccc8
		"--color-error-300": "234 174 167", // #eaaea7
		"--color-error-400": "219 113 101", // #db7165
		"--color-error-500": "203 52 35", // #cb3423
		"--color-error-600": "183 47 32", // #b72f20
		"--color-error-700": "152 39 26", // #98271a
		"--color-error-800": "122 31 21", // #7a1f15
		"--color-error-900": "99 25 17", // #631911
		// surface | #083146 
		"--color-surface-50": "218 224 227", // #dae0e3
		"--color-surface-100": "206 214 218", // #ced6da
		"--color-surface-200": "193 204 209", // #c1ccd1
		"--color-surface-300": "156 173 181", // #9cadb5
		"--color-surface-400": "82 111 126", // #526f7e
		"--color-surface-500": "8 49 70", // #083146
		"--color-surface-600": "7 44 63", // #072c3f
		"--color-surface-700": "6 37 53", // #062535
		"--color-surface-800": "5 29 42", // #051d2a
		"--color-surface-900": "4 24 34", // #041822
		
	}
}
