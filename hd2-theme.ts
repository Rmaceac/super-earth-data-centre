
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const HDTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fee700 
		"--color-primary-50": "255 251 217", // #fffbd9
		"--color-primary-100": "255 250 204", // #fffacc
		"--color-primary-200": "255 249 191", // #fff9bf
		"--color-primary-300": "255 245 153", // #fff599
		"--color-primary-400": "254 238 77", // #feee4d
		"--color-primary-500": "254 231 0", // #fee700
		"--color-primary-600": "229 208 0", // #e5d000
		"--color-primary-700": "191 173 0", // #bfad00
		"--color-primary-800": "152 139 0", // #988b00
		"--color-primary-900": "124 113 0", // #7c7100
		// secondary | #52c5d6 
		"--color-secondary-50": "229 246 249", // #e5f6f9
		"--color-secondary-100": "220 243 247", // #dcf3f7
		"--color-secondary-200": "212 241 245", // #d4f1f5
		"--color-secondary-300": "186 232 239", // #bae8ef
		"--color-secondary-400": "134 214 226", // #86d6e2
		"--color-secondary-500": "82 197 214", // #52c5d6
		"--color-secondary-600": "74 177 193", // #4ab1c1
		"--color-secondary-700": "62 148 161", // #3e94a1
		"--color-secondary-800": "49 118 128", // #317680
		"--color-secondary-900": "40 97 105", // #286169
		// tertiary | #b0c4de 
		"--color-tertiary-50": "243 246 250", // #f3f6fa
		"--color-tertiary-100": "239 243 248", // #eff3f8
		"--color-tertiary-200": "235 240 247", // #ebf0f7
		"--color-tertiary-300": "223 231 242", // #dfe7f2
		"--color-tertiary-400": "200 214 232", // #c8d6e8
		"--color-tertiary-500": "176 196 222", // #b0c4de
		"--color-tertiary-600": "158 176 200", // #9eb0c8
		"--color-tertiary-700": "132 147 167", // #8493a7
		"--color-tertiary-800": "106 118 133", // #6a7685
		"--color-tertiary-900": "86 96 109", // #56606d
		// success | #0e9c2b 
		"--color-success-50": "219 240 223", // #dbf0df
		"--color-success-100": "207 235 213", // #cfebd5
		"--color-success-200": "195 230 202", // #c3e6ca
		"--color-success-300": "159 215 170", // #9fd7aa
		"--color-success-400": "86 186 107", // #56ba6b
		"--color-success-500": "14 156 43", // #0e9c2b
		"--color-success-600": "13 140 39", // #0d8c27
		"--color-success-700": "11 117 32", // #0b7520
		"--color-success-800": "8 94 26", // #085e1a
		"--color-success-900": "7 76 21", // #074c15
		// warning | #ff7300 
		"--color-warning-50": "255 234 217", // #ffead9
		"--color-warning-100": "255 227 204", // #ffe3cc
		"--color-warning-200": "255 220 191", // #ffdcbf
		"--color-warning-300": "255 199 153", // #ffc799
		"--color-warning-400": "255 157 77", // #ff9d4d
		"--color-warning-500": "255 115 0", // #ff7300
		"--color-warning-600": "230 104 0", // #e66800
		"--color-warning-700": "191 86 0", // #bf5600
		"--color-warning-800": "153 69 0", // #994500
		"--color-warning-900": "125 56 0", // #7d3800
		// error | #ca1616 
		"--color-error-50": "247 220 220", // #f7dcdc
		"--color-error-100": "244 208 208", // #f4d0d0
		"--color-error-200": "242 197 197", // #f2c5c5
		"--color-error-300": "234 162 162", // #eaa2a2
		"--color-error-400": "218 92 92", // #da5c5c
		"--color-error-500": "202 22 22", // #ca1616
		"--color-error-600": "182 20 20", // #b61414
		"--color-error-700": "152 17 17", // #981111
		"--color-error-800": "121 13 13", // #790d0d
		"--color-error-900": "99 11 11", // #630b0b
		// surface | #091c20 
		"--color-surface-50": "218 221 222", // #daddde
		"--color-surface-100": "206 210 210", // #ced2d2
		"--color-surface-200": "194 198 199", // #c2c6c7
		"--color-surface-300": "157 164 166", // #9da4a6
		"--color-surface-400": "83 96 99", // #536063
		"--color-surface-500": "9 28 32", // #091c20
		"--color-surface-600": "8 25 29", // #08191d
		"--color-surface-700": "7 21 24", // #071518
		"--color-surface-800": "5 17 19", // #051113
		"--color-surface-900": "4 14 16", // #040e10
		
	}
}
