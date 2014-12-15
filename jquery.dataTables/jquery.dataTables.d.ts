// Type definitions for JQuery DataTables 1.10.4
// Project: http://www.datatables.net
//
// jquery.DataTables 1.10 had some pretty significant API changes and pretty much everything was renamed
// This definition file requires Typescript 1.3 for the use of Tuple Types, and further completion can be done
// when Typescript 1.4 releases to use Unions for more specific typing
//

interface JQuery {
	dataTable: DataTables.StaticApi;
	DataTable( options?: DataTables.Options ): DataTables.Api;
}

declare module DataTables {
	//#region Types
	export interface Options {
		//#region Features
		autoWidth?: boolean;
		deferRender?: boolean;
		info?: boolean;
		jQueryUI?: boolean;
		lengthChange?: boolean;
		ordering?: boolean;
		paging?: boolean;
		processing?: boolean;
		scrollX?: boolean;
		scrollY?: string;
		searching?: boolean;
		serverSide?: boolean;
		stateSave?: boolean;
		//#endregion

		//#region Data
		ajax?: any;
		data?: any[];
		//#endregion

		//#region Callbacks
		createdRow?: ( row: HTMLElement, data: any, dataIndex: number ) => void;
		drawCallback?: ( settings: Settings ) => void;
		footerCallback?: ( tfoot: HTMLElement, data: any[], start: number, end: number, display: any[] ) => void;
		formatNumber?: ( toFormat: number ) => string;
		headerCallback?: ( tfoot: HTMLElement, data: any[], start: number, end: number, display: any[] ) => void;
		infoCallback?: ( settings: Settings, start: number, end: number, max: number, total: number, pre: string ) => string;
		initComplete?: ( settings: Settings, json: any ) => void;
		preDrawCallback?: ( settings: Settings ) => void;
		rowCallback?: ( row: HTMLElement, data: any ) => void;
		stateLoadCallback?: ( settings: Settings ) => State;
		stateLoaded?: ( settings: Settings, data: State ) => void;
		stateLoadParams?: ( settings: Settings, data: State ) => void;
		stateSaveCallback?: ( settings: Settings, data: State ) => void;
		stateSaveParams?: ( settings: Settings, data: State ) => void;
		//#endregion

		//#region Options
		deferLoading?: any;
		destroy?: boolean;
		displayStart?: number;
		dom?: string;
		lengthMenu?: any[];
		orderCellsTop?: boolean;
		orderClasses?: boolean;
		order?: any[];
		orderFixed?: any;
		orderMulti?: boolean;
		pageLength?: number;
		pagingType?: string;
		renderer?: any;
		retrieve?: boolean;
		scrollCollapse?: boolean;
		searchCols?: ColumnSearch[];
		searchDelay?: number;
		search?: Search;
		stateDuration?: number;
		stripeClasses?: string[];
		tabIndex?: number;
		//#endregion

		//#region Columns
		columns?: Column[];
		columnDefs?: ColumnDef[];
		//#endregion

		//#region Internationalisation
		language?: Language;
		//#endregion
	}

	export interface CellIndex {
		row: number;
		column: number;
		columnVisible?: boolean;
	}

	export interface Column {
		cellType?: string;
		className?: string;
		contentPadding?: string;
		createdCell?: ( cell: HTMLElement, cellData: any, rowData: any, rowIndex: number, colIndex: number ) => void;
		data?: any;
		defaultContent?: string;
		name?: string;
		orderable?: boolean;
		orderData?: any;
		orderDataType?: string;
		orderSequence?: string[];
		render?: any;
		searchable?: boolean;
		title?: string;
		type?: string;
		visible?: boolean;
		width?: string;
	}

	export interface ColumnDef extends Column {
		targets?: any;
	}

	export interface ColumnSearch {
		search: string;
		escapeRegEx?: boolean;
	}

	export interface ColumnState {
		visible: boolean;
		search?: Search;
	}

	export interface ColumnSort {
		columnIndex: number;
		direction: string;
	}

	export interface Language {
		aria?: LanguageAria;
		decimal?: string;
		emptyTable?: string;
		info?: string;
		infoEmpty?: string;
		infoFiltered?: string;
		infoPostFix?: string;
		lengthMenu?: string;
		loadingRecords?: string;
		paginate?: LanguagePaginate;
		processing?: string;
		search?: string;
		searchPlaceholder?: string;
		thousands?: string;
		url?: string;
		zeroRecrods?: string;
	}

	export interface LanguageAria {
		sortAscending?: string;
		sortDescending?: string;
	}

	export interface LanguagePaginate {
		first?: string;
		last?: string;
		next?: string;
		previous?: string;
	}

	export interface Search {
		search?: string;
		regex?: boolean;
		smart?: boolean;
		caseInsensitive?: boolean;
	}

	export interface SelectorModifier {
		order: string;
		search: string;
		page: string;
	}

	export interface Settings {
	}

	export interface State {
		time: number;
		start: number;
		length: number;
		order: any[];
		search: Search;
		columns: ColumnState[];
	}

	// Can't use these until TypeScript 1.4
	//type CellSelector = string | Node | ():void | CellIndex | Array<string | Node | ():void | CellIndex>;
	//type ColumnData = number | string | { "_": string, filter?: string, display?: string, sort?: string } | ( row: any, type: string, set: string, meta: { row: number, col: number: settings: Settings } ) : any;
	//type ColumnSelector = number | string | Node | ():void | JQuery | Array<number | string | Node | ():void | JQuery>;
	//type Order = [number, string] | Array<[number, string]>;
	//type RowChildData = string | Node | JQuery | Array<string | Node | JQuery>;
	//type RowSelector = number | string | Node | ():void | JQuery | Array<number | string | Node | ():void | JQuery>;
	//type TableSelector = number | string | Node | JQuery | Array<number | string | Node | JQuery>;
	//#endregion

	//#region Api
	export interface AjaxApi {
		json(): any;
		params(): any;
		reload( callback?: ( json: any ) => void, resetPaging?: boolean ): Api;
		url: AjaxUrlApi;
	}

	export interface AjaxUrlApi {
		(): string;
		( url: string ): Api;
		load( callback?: ( json: any ) => void, resetPaging?: boolean ): Api;
	}

	export interface Api {
		//#region Core
		$( selector: string, modifier?: SelectorModifier ): JQuery;
		$( selector: HTMLElement[], modifier?: SelectorModifier ): JQuery;
		$( selector: JQuery, modifier?: SelectorModifier ): JQuery;
		ajax: AjaxApi;
		clear(): Api;
		data(): Api;
		destroy( remove?: boolean ): Api;
		draw( reset?: boolean ): Api;
		off( event: string, callback?: ( e: string, settings: Settings, json: any ) => void ): Api;
		on( event: string, callback: ( e: string, settings: Settings, json: any ) => void ): Api;
		one( event: string, callback: ( e: string, settings: Settings, json: any ) => void ): Api;
		order: OrderApi;
		page: PageApi;
		search(): string;
		search( input: string, regex?: boolean, smart?: boolean, caseInsen?: boolean ): Api;
		settings(): Settings;
		state: StateApi;
		//#endregion

		//#region Cell
		cell: CellApi;
		cells: CellsApi;
		//#endregion

		//#region Columns
		column: ColumnApi;
		columns: ColumnsApi;
		//#endregion

		//#region Rows
		row: RowApi;
		rows: RowsApi;
		//#endregion

		//#region Tables
		table: TableApi;
		tables: TablesApi;
		//#endregion

		//#region Utility
		concat( a: Api, b?: Api, ...otherDataTableApis: Api[] ): Api;
		each( fn: ( value: any, index: number, api: Api ) => void ): Api;
		eq( idx: number ): Api;
		filter( fn: ( value: any, index: number, api: Api ) => boolean ): Api;
		flatten(): Api;
		indexOf( value: any ): number;
		iterator( flatten: boolean, type: string, fn: ( settings: Settings ) => Api, returns?: boolean );
		iterator( flatten: boolean, type: string, fn: ( settings: Settings, item: any, loopCounter: number ) => Api, returns?: boolean );
		iterator( flatten: boolean, type: string, fn: ( settings: Settings, index: number, outerCounter: number, innerCounter: number ) => Api, returns?: boolean );
		iterator( flatten: boolean, type: string, fn: ( settings: Settings, columnIdx: number, tableCounter: number, columnCounter: number, rowIndexes: number[] ) => Api, returns?: boolean );
		iterator( flatten: boolean, type: string, fn: ( settings: Settings, rowIdx: number, columnIdx: number, tableCounter: number, cellCounter: number ) => Api, returns?: boolean );
		join( seperator: string ): string;
		lastIndexOf( value: any ): number;
		length: number;
		map( fn: ( value: any, index: number, api: Api ) => any ): Api;
		pluck( property: string ): Api;
		pluck( property: number ): Api;
		pop(): any;
		push( value_1: any, value_2?: any, ...otherValues: any[] ): number;
		reduce( fn: ( accumulatedValue: any, itemValue: any, index: number, api: Api ) => any, initialValue?: any ): any;
		reduceRight( fn: ( accumulatedValue: any, itemValue: any, index: number, api: Api ) => any, initialValue?: any ): any;
		reverse(): Api;
		shift(): any;
		sort( fn?: ( value_1: any, value_2: any ) => number ): Api;
		splice( index: number, howMany: number, value_1: any, ...otherValues: any[] ): any[];
		to$(): JQuery;
		toArray(): any[];
		toJQuery(): JQuery;
		unique(): Api;
		unshift( value_1: any, value_2?: any, ...otherValues: any[] ): number;
		//#endregion
	}

	export interface CellApi {
		( cellSelector: any, modifier?: SelectorModifier ): Api;
		( rowSelector: any, columnSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		data(): any;
		data( set: any ): Api;
		index(): CellIndex;
		invalidate( source?: string ): Api;
		node(): HTMLElement;
		render( type: string ): Api;
	}

	export interface CellsApi {
		( modifier?: SelectorModifier ): Api;
		( cellSelector: any, modifier?: SelectorModifier ): Api;
		( rowSelector: any, columnSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		data(): Api;
		indexex(): Api;
		invalidate( source?: string ): Api;
		nodes(): Api;
		render( type: string ): Api;
	}

	export interface ColumnApi {
		( columnSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		data(): Api;
		dataSrc(): any;
		footer(): HTMLElement;
		header(): HTMLElement;
		index( type?: string ): Api;
		index( type: string, index: number ): number;
		nodes(): Api;
		order( direction: string ): Api;
		search(): string;
		search( input: string, regex?: boolean, smart?: boolean, caseInsen?: boolean ): Api;
		visible( show: boolean, redrawCalculation?: boolean ): Api;
	}

	export interface ColumnsApi {
		( modifier?: SelectorModifier ): Api;
		( columnSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		data(): Api;
		dataSrc(): Api;
		footer(): Api;
		header(): Api;
		indexes( type?: string ): Api;
		nodes(): Api;
		order( direction: string ): Api;
		search(): Api;
		search( input: string, regex?: boolean, smart?: boolean, caseInsen?: boolean ): Api;
		visible( show: boolean, redrawCalculation?: boolean ): Api;
		adjust(): Api;
	}

	export interface OrderApi {
		(): [number, string][];
		( order: [number, string], ...additionalOrders: [number, string][] ): Api;
		( order: [number, string][] ): Api;
		listener: OrderListenerApi;
	}

	export interface OrderListenerApi {
		( node: HTMLElement, number, callback: () => void ): Api;
		( node: JQuery, number, callback: () => void ): Api;
		( node: string, number, callback: () => void ): Api;
	}

	export interface PageApi {
		(): number;
		( set: string ): Api;
		( set: number ): Api;
		info(): PageInfo;
		len(): number;
		len( set: number ): Api;
	}

	export interface PageInfo {
		page: number;
		pages: number;
		start: number;
		end: number;
		length: number;
		recordsTotal: number;
		recordsDisplay: number;
	}

	export interface RowApi {
		( rowSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		child: RowChildApi;
		data(): any;
		data( d: any ): Api;
		index(): number;
		invalidate( source?: string ): Api;
		node(): HTMLElement;
		remove(): HTMLElement;
		add( data: any ): Api;
	}

	export interface RowChildApi {
		(): JQuery;
		( showRemove: boolean ): Api;
		( data: any, className: string ): Api;
		hide(): Api;
		remove(): Api;
		show(): Api;
		isShown(): boolean;
	}

	export interface RowsApi {
		( modifier?: SelectorModifier ): Api;
		( rowSelector: any, modifier?: SelectorModifier ): Api;
		cache( type: string ): Api;
		data(): Api;
		indexes(): Api;
		invalidate( source?: string ): Api;
		nodes(): Api;
		remove(): Api;
		add( data: any[] ): Api;
	}

	export interface StateApi {
		(): State;
		clear(): Api;
		loaded(): State;
		save(): Api;
	}

	export interface TableApi {
		( tableSelector: any ): Api;
		body(): HTMLElement;
		container(): HTMLElement;
		footer(): HTMLElement;
		header(): HTMLElement;
		node(): HTMLElement;
	}

	export interface TablesApi {
		( tableSelector: any ): Api;
		body(): Api;
		containers(): Api;
		footer(): Api;
		header(): Api;
		nodes(): Api;
	}

	export interface StaticApi {
		( options?: DataTables.Options ): JQuery;
		isDataTable(): boolean;
		tables( visible?: boolean ): Api[];
		util: {
			escapeRegEx( str: string ): string;
			throttle( fn: ( ...params: any[] ) => void, freq?: number ): ( ...params: any[] ) => void;
		};
		versionCheck( version: string ): boolean;
	}
	//#endregion
}
