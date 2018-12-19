<template>
	<div class="create-lead">
		<div class="form-elements">
			<div class="row">
				<div class="col-md-8">
					<vuestic-widget :headerText="'Create Lead' | translate">
						<form>

							<div class="row justify-content-center">
								<div class="col-md-4">
									<fieldset>
										<div class="form-group">
											<div class="input-group">
												<input id="simple-input" required/>
												<label class="control-label" for="simple-input">{{'ID'
													| translate}}</label><i class="bar"></i>
												</div>
											</div>
										</fieldset>
									</div>
									</div>
							<div class="row justify-content-center">
									<div class="col-md-4">
										<fieldset>
											<div class="form-group">
												<div class="input-group">
													<input id="simple-input" required/>
													<label class="control-label" for="simple-input">{{'Description'
														| translate}}</label><i class="bar"></i>
													</div>
												</div>
											</fieldset>
										</div>
								</div>

							<div class="row justify-content-center">
										<div class="col-md-4">
											<fieldset>
												<div class="form-group">
													<div class="input-group">
														<input id="simple-input" required/>
														<label class="control-label" for="simple-input">{{'Summary'
															| translate}}</label><i class="bar"></i>
														</div>
													</div>
												</fieldset>
											</div>
										</div>
										<div class="row justify-content-center">
											<div class="col-md-4">
												<fieldset>
													<vuestic-simple-select
													:label="'Select Client' | translate"
													v-model="simpleSelectModel"
													option-key="description"
													v-bind:options="simpleOptions"
													/>
												</fieldset>
												</div>
											</div>

										<div class="row justify-content-center">
											<div class="col-md-4">
												<fieldset>
													<vuestic-simple-select
													:label="'Select Salesman' | translate"
													v-model="simpleSelectModel"
													option-key="description"
													v-bind:options="simpleOptions"
													/>
												</fieldset>
												</div>
											</div>

										<div class="row justify-content-center">

											<div class="col-md-4">
											<div class="d-flex justify-content-center">
												<button class="btn btn-primary">
													{{'Submit' | translate}}
												</button>
												</div>
											</div>
											</div>
										</form>
									</vuestic-widget>
								</div>
							</div>
						</div>
					</div>
				</template>

				<script>

					export default {
						components:{
						},
						data () {
							return {
								simpleOptions: [
								{
									id: 1,
									description: 'First option',
								},
								{
									id: 2,
									description: 'Second option',
								},
								{
									id: 3,
									description: 'Third option',
								},
								],
								simpleSelectModel: ''
							}
						}
					}
				</script>

				<style scoped>

				</style>
